import { useState } from "react";

export const Rsvp = () => {
  const [rsvpPayload, setRsvpPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    restrictions: "",
    willAttend: null,
  });
  const [sbumission, setSubmission] = useState(false);

  const handleInputChange = (e) => {
    setRsvpPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(rsvpPayload);
  };

  const handleAssistance = (e) => {
    setRsvpPayload((prevState) => ({
      ...prevState,
      willAttend: e,
    }));
  };

  const handleSubmission = () => {
    console.log("SUBMIT", rsvpPayload);
    setSubmission(true);
  };
  return (
    <section id="rsvp" className="flex justify-center">
      <div className="flex-1 p-[100px] w-1/2 space-y-6">
        <div>
          <h2 className="text-navy font-sansLight text-[60px] mb-6">RSVP</h2>
          <span className=" text-terra text-[48px] font-sansLightItalic mb-2 block">
            Tu presencia es nuestro mayor regalo
          </span>
          <p>
            Recorá que tenes tiempo hasta el <b>30 de Abril</b> para confirmar
            tu asistencia a nuestra boda.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-terra text-[20px]">17/05/2025</h4>
            <p className="max-w-[300px] text-[14px]">
              ¡No olvides marcar esta fecha en tu calendario!
            </p>
          </div>
          <div>
            <h4 className="text-terra text-[20px]">14:30hs</h4>
            <p className="max-w-[300px] text-[14px]">
              ¡Recordá llegar a tiempo para no perderte ni un solo segundo de la
              ceremonia!
            </p>
          </div>
          <div>
            <h4 className="text-terra text-[20px]">
              Paz 750, Victoria, Buenos Aires
            </h4>
            <p className="max-w-[300px] text-[14px]">
              Si no sabes como llegar, te compartimos el mapa.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-[100px] w-1/2 flex justify-center items-center">
        <div className="max-w-[400px]">
          {sbumission ? (
            <div className="uppercase text-terra">
              Gracias por confirmar tu asistencia!
            </div>
          ) : (
            <div className="space-y-14 gap-y-4">
              <div className="space-y-10">
                <div className="flex gap-x-6">
                  <input
                    name="firstName"
                    type="text"
                    className="w-full p-4 pb-2 pl-0 border-b-2 outline-none focus:outline-none border-b-terra text-terra placeholder:text-terra-100 placeholder:uppercase"
                    placeholder="Nombre"
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                  <input
                    name="lastName"
                    type="text"
                    className="w-full p-4 pb-2 pl-0 border-b-2 outline-none focus:outline-none border-b-terra text-terra placeholder:text-terra-100 placeholder:uppercase"
                    placeholder="Apellido"
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    className="w-full p-4 pb-2 pl-0 border-b-2 outline-none focus:outline-none border-b-terra text-terra placeholder:text-terra-100 placeholder:uppercase"
                    placeholder="Email"
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-6">
                <label className="uppercase text-terra">
                  Confirmás tu asistencia?
                </label>
                <div className="flex w-full gap-x-4">
                  <div
                    className={`w-1/2 p-4 bg-white border-4 cursor-pointer font-sansLight ${
                      rsvpPayload.willAttend !== null && rsvpPayload.willAttend
                        ? "border-terra"
                        : "border-white"
                    }`}
                    onClick={() => handleAssistance(true)}
                  >
                    Con alegría confirmo!
                  </div>
                  <div
                    className={`w-1/2 p-4 bg-white border-4 cursor-pointer font-sansLight ${
                      rsvpPayload.willAttend !== null && !rsvpPayload.willAttend
                        ? "border-terra"
                        : "border-white"
                    }`}
                    onClick={() => handleAssistance(false)}
                  >
                    Con tristeza declino.
                  </div>
                </div>
              </div>
              {rsvpPayload.willAttend && (
                <div>
                  <label className="uppercase text-terra">
                    Restricciones alimentarias?
                  </label>
                  <input
                    name="restrictions"
                    type="text"
                    className="w-full p-4 pb-2 pl-0 border-b-2 outline-none focus:outline-none border-b-terra text-terra placeholder:text-terra-100 placeholder:uppercase"
                    placeholder="Ej. Vegetariano, Celíaco, etc."
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              )}

              <button
                className="w-full p-4 text-white uppercase bg-terra disabled:bg-terra-100"
                disabled={
                  !rsvpPayload.firstName ||
                  !rsvpPayload.email ||
                  rsvpPayload.willAttend === null
                }
                onClick={handleSubmission}
              >
                Enviar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
