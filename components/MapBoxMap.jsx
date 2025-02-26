import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import * as MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

import "mapbox-gl/dist/mapbox-gl.css";

const MapBoxMap = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [homeLat, setHomeLat] = useState();
  const [homeLn, setHomeLn] = useState();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJpZWxtb2d1aTkyIiwiYSI6ImNtNmF5dGpkczAydzgyam84Ymd3MnE3YjcifQ.fQzDyeyYB7Dzjr4n0ACkeQ";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-58.3841453, -34.6037345],
      zoom: 12,
      interactive: false,
      style: "mapbox://styles/arielmogui92/cm6b42ohc008001qmfj1n3apt",
    }).addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      })
        .setOrigin([-58.3841453, -34.6037345])
        .setDestination([-58.54279765437221, -34.442017112408465])
    );

    new mapboxgl.Marker()
      .setLngLat([-58.3841453, -34.6037345])
      .addTo(mapRef.current);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(mapRef.current);
        mapRef.current.setCenter([longitude, latitude]);
      },
      (error) => {
        console.error("Error getting geolocation:", error.message);
        // Handle geolocation error (optional)
      }
    );
  }, []);

  return (
    <div
      style={{ height: "500px" }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};

export default MapBoxMap;
