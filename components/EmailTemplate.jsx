export const ConfirmEmailTemplate = () => {
  return (
    <div style={{ spaceY: "24px" }}>
      <h1 style={{ color: "#594435", fontSize: "22px", marginBottom: "8px" }}>
        ¡Hemos recibido tu confirmación!
      </h1>
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ color: "#C78665", fontSize: "20px", marginBottom: "8px" }}>
          Fecha: 17/05/2025
        </h4>
        <p style={{ fontSize: "14px" }}>
          ¡No olvides marcar esta fecha en tu calendario!
        </p>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ color: "#C78665", fontSize: "20px", marginBottom: "8px" }}>
          Hora: 14:30hs
        </h4>
        <p style={{ fontSize: "14px" }}>
          ¡Recordá llegar a tiempo para no perderte ni un solo segundo de la
          ceremonia!
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ color: "#C78665", fontSize: "20px", marginBottom: "8px" }}>
          Dirección: Paz 750, Victoria, Buenos Aires
        </h4>
        <p style={{ fontSize: "14px" }}>
          Si no sabes como llegar, te compartimos el link a la aplicación Waze y
          Google Maps.
        </p>
        <a
          style={{
            background: "#594435",
            color: "#dedee1",
            padding: "10px",
            display: "block",
            marginBottom: "16px",
            textDecoration: "none",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "bold",
          }}
          href="https://www.waze.com/es-419/live-map/directions/palacio-sans-souci-paz-705-victoria?navigate=yes&to=place.w.197592496.1975662811.1519555"
        >
          Ver en Waze
        </a>
        <a
          style={{
            background: "#c78665",
            color: "#dedee1",
            padding: "10px",
            display: "block",
            marginBottom: "12px",
            textDecoration: "none",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "bold",
          }}
          href="https://www.google.com/maps/dir//Palacio+Sans+Souci,+Paz+705,+B1644+Victoria,+Provincia+de+Buenos+Aires/@-34.4456953,-58.5838708,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x95bcafed768183c7:0xc92f85bbc135699c!2m2!1d-58.5425261!2d-34.4458194!3e0?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
        >
          Ver en Google Maps
        </a>
      </div>
      <h1 style={{ color: "#c78665", fontSize: "20px", marginBottom: "8px" }}>
        ¡Te esperamos!
      </h1>
    </div>
  );
};

export const VirtualEmailTemplate = ({ name, url }) => {
  return (
    <div style={{ spaceY: "24px" }}>
      <h1 style={{ color: "#594435", fontSize: "22px", marginBottom: "8px" }}>
        Lamentamos que no puedas asistir
      </h1>
      <p style={{ fontSize: "14px" }}>
        De todas formas, recordá que puedes acompañarnos viendo la transmisión
        en vivo de la ceremonia. Te enviaremos el link a este mail o puedes
        acceder desde nuestro sitio web{" "}
        <a
          style={{
            color: "#c78665",
            marginBottom: "12px",
            textDecoration: "none",
          }}
          href="https://laurayariel.site"
        >
          laurayariel.site
        </a>
      </p>
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ color: "#C78665", fontSize: "20px", marginBottom: "8px" }}>
          Fecha: 17/05/2025
        </h4>
        <p style={{ fontSize: "14px" }}>
          ¡No olvides marcar esta fecha en tu calendario!
        </p>
      </div>
    </div>
  );
};