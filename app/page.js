"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
    <main className="pb-12">
      <section className="flex items-center justify-center w-full h-screen gap-x-4">
        <span className="text-[72px]">Laura</span>
        <span className="text-[72px]">Ariel</span>
        [foto portada]
      </section>
      <section className="text-center">
        <h2 className="uppercase max-w-[1024px] text-[60px] m-auto mb-4">
          El momento llegó, nos estamos casando!
        </h2>
        <p className="max-w-[1024px] m-auto text-[24px] mb-6">
          A 10 años de habernos visto por primera vez, despues de tantas
          comidas, salidas, juegos y aventuras, decidimos finalmente compartir
          una vida juntos y es nuestro deseo compartir este momento con vos!
        </p>
        <a href="#rsvp" className="bg-[#0d0804] p-4 text-[#fefae0] uppercase">
          Vení a celebrar!
        </a>
      </section>
      <br />
      <br />
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
    </main>
  );
}
