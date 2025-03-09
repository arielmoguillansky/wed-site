import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBoxDirections = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const destination = [-58.5452465, -34.4457685];
  const defaultOrigin = [-58.38, -34.6];
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    // Inicializa el mapa inmediatamente con la ubicación predeterminada
    initializeMap(defaultOrigin, destination);
    setLoading(false);

    // Luego, intenta obtener la geolocalización
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          initializeMap([longitude, latitude], destination);
          setLoading(false);
        },
        (err) => {
          console.error("Geolocation error:", err);
          setError(
            "Hubo un error al obtener su ubicación. Mostrando ruta desde una ubicación predeterminada."
          );
          setLoading(false);
        }
      );
    } else {
      setError(
        "Geolocalización no es soportada por su navegador. Mostrando ruta desde una ubicación predeterminada."
      );
      setLoading(false);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [destination]);

  const initializeMap = (origin, destination) => {
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    const maxBounds = new mapboxgl.LngLatBounds(
      [-58.6, -34.6], // Esquina suroeste
      [-58, -34.45] // Esquina noreste
    );
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/arielmogui92/cm6b42ohc008001qmfj1n3apt",
      center: origin,
      zoom: 12,
      interactive: true,
      maxBounds: maxBounds,
    });

    map.current.on("load", () => {
      new mapboxgl.Marker({ color: "#594435" })
        .setLngLat(origin)
        .addTo(map.current);
      new mapboxgl.Marker({ color: "#c78665" })
        .setLngLat(destination)
        .setPopup(new mapboxgl.Popup().setHTML("<p>Palacio Sans Socuci</p>"))
        .addTo(map.current);

      const bounds = new mapboxgl.LngLatBounds()
        .extend(origin)
        .extend(destination);
      map.current.fitBounds(bounds, { padding: 100 });

      getDirections(origin, destination);
    });
  };

  const getDirections = async (origin, destination) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const routeGeometry = route.geometry;

        if (map.current.getSource("route")) {
          map.current.getSource("route").setData({
            type: "Feature",
            properties: {},
            geometry: routeGeometry,
          });
        } else {
          map.current.addSource("route", {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: routeGeometry,
            },
          });
          map.current.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: { "line-join": "round", "line-cap": "round" },
            paint: {
              "line-color": "#c78665",
              "line-width": 4,
              "line-opacity": 1,
            },
          });
        }

        const duration = Math.floor(route.duration / 60);
        const distance = (route.distance / 1000).toFixed(1);

        new mapboxgl.Popup()
          .setHTML(
            `<p>Distancia: ${distance} km<br>Duración: ${duration} minutos</p>`
          )
          .addTo(map.current);
      } else {
        setError("No se han encontrado rutas entre los puntos seleccionados.");
      }
    } catch (err) {
      console.error("Error fetching directions:", err);
      setError("Hubo un error al obtener las direcciones. Intente nuevamente.");
    }
  };

  return (
    <div className="relative map-container">
      {loading && (
        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full text-xl loading">
          Cargando mapa...
        </div>
      )}
      <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default MapBoxDirections;
