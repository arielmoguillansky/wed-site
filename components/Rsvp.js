import { useState } from "react";

export const Rsvp = () => {
  const [rsvpPayload, setRsvpPayload] = useState({
    name: "",
    restrictions: "",
    willAttend: null,
  });
  const [sbumission, setSubmission] = useState(false);

  const handleInputChange = (e) => {
    setRsvpPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
    <section id="rsvp" className="block m-auto w-[460px]">
      <h2 className="text-center text-[48px] mb-6">RSVP</h2>
      {sbumission ? (
        <div>Tu confirmación quedó registrada!</div>
      ) : (
        <div className="flex flex-col gap-y-4">
          <div>
            <label className="block">Tu nombre</label>
            <input
              name="name"
              type="text"
              className="w-full p-4"
              placeholder="Nombre completo"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>Confirmás tu asistencia?</label>
            <div className="flex w-full gap-x-4">
              <div
                className={`w-1/2 p-4 bg-white border-4 cursor-pointer ${
                  rsvpPayload.willAttend !== null && rsvpPayload.willAttend
                    ? "border-[#CCD5AE]"
                    : "border-white"
                }`}
                onClick={() => handleAssistance(true)}
              >
                Con alegría confirmo!
              </div>
              <div
                className={`w-1/2 p-4 bg-white border-4 cursor-pointer ${
                  rsvpPayload.willAttend !== null && !rsvpPayload.willAttend
                    ? "border-[#CCD5AE]"
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
              <label className="block">Restricciones alimentarias?</label>
              <input
                name="restrictions"
                type="text"
                className="w-full p-4"
                placeholder="Nombre completo"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          )}

          <button
            className="bg-[#CCD5AE] p-4 w-full"
            disabled={!rsvpPayload.name || rsvpPayload.willAttend === null}
            onClick={handleSubmission}
          >
            Enviar
          </button>
        </div>
      )}
    </section>
  );
};
