import Image from "next/image";
import Link from "next/link";
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
  };

  const handleAssistance = (e) => {
    setRsvpPayload((prevState) => ({
      ...prevState,
      willAttend: e,
    }));
  };

  const handleSubmission = () => {
    fetch("/api/form/rsvpForm", {
      method: "POST",
      body: JSON.stringify({
        106: rsvpPayload.firstName,
        107: rsvpPayload.lastName,
        104: rsvpPayload.email,
        108: rsvpPayload.willAttend ? "Si" : "No",
        109: rsvpPayload.restrictions,
        112: rsvpPayload.songs,
      }),
    })
      .then(() => setSubmission(true))
      .catch((err) => console.error(err));

    fetch("/api/email/confirmationEmail", {
      method: "POST",
      body: JSON.stringify({
        ...rsvpPayload,
      }),
    })
      .then(() => console.log("EMAIL sent"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="xl:max-w-[1300px] max-w-[720px] mx-auto">
      <div>
        <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] text-center font-sansLight">
          RSVP
        </h2>
        <p className="text-terra text-[24px] text-center mb-8 mt-2 max-w-[720px] mx-auto font-sansLightItalic md:mb-14">
          Guarda tu lugar en nuestra boda
        </p>
      </div>
      <div className="max-w-[720px] mx-auto place-items-center">
        <p className="md:text-[24px] text-[20px]">
          Recordá que tenes tiempo hasta el <b>17 de Abril</b> para confirmar tu
          asistencia - solo participación presencial.
        </p>
        <br />
        <p className="md:text-[24px] text-[20px]">
          En un grupo familiar, cada integrante invitado deberá confirmar su
          asistencia de forma individual.
        </p>
        <p className="text-terra md:text-[48px] text-[32px] text-center font-sansLightItalic my-10">
          Tu presencia es nuestro mayor regalo. Anotate!
        </p>
        <Link href="#rsvp-form">
          <Image
            className="w-8 h-8 cursor-pointer animate-bounce-arrow md:w-10 md:h-10"
            src="https://res.cloudinary.com/db03kvlju/image/upload/v1741608395/chevron_right_24dp_C78665_FILL0_wght400_GRAD0_opsz24_yrgpy8.svg"
            alt="Down arrow"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div
        id="rsvp-form"
        className="flex items-center justify-center w-full mx-auto xl:w-1/2 mt-28"
      >
        <div className="xl:max-w-[400px]">
          {sbumission ? (
            <div className="leading-normal text-center uppercase text-terra">
              {rsvpPayload.willAttend
                ? "Gracias por confirmar tu asistencia, te esperamos!"
                : `Lamentamos que no puedas asistir. De todas formas, recordá que podrás conectarte a la transmisión del evento!`}
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
                    className={`w-1/2 text-[18px] border-terra-100 p-4 border cursor-pointer font-sansLight flex justify-center items-center ${
                      rsvpPayload.willAttend !== null && rsvpPayload.willAttend
                        ? "bg-terra text-white font-sansMed"
                        : "bg-white"
                    }`}
                    onClick={() => handleAssistance(true)}
                  >
                    Ahí estaré!
                  </div>
                  <div
                    className={`w-1/2 text-[18px] border-terra-100 p-4 border cursor-pointer font-sansLight flex justify-center items-center ${
                      rsvpPayload.willAttend !== null && !rsvpPayload.willAttend
                        ? "bg-terra text-white font-sansMed"
                        : "bg-white"
                    }`}
                    onClick={() => handleAssistance(false)}
                  >
                    No podré asistir
                  </div>
                </div>
              </div>
              {rsvpPayload.willAttend && (
                <>
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
                  <div>
                    <label className="uppercase text-terra">
                      deja acá la/las canción/nes que no pueden faltar para
                      verte en la pista de baile
                    </label>
                    <input
                      name="songs"
                      type="text"
                      className="w-full p-4 pb-2 pl-0 border-b-2 outline-none focus:outline-none border-b-terra text-terra placeholder:text-terra-100 placeholder:uppercase"
                      placeholder="Canción"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </>
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
    </div>
  );
};
