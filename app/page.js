"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function Home() {
  const [rsvpPayload, setRsvpPayload] = useState({
    name: "",
    restrictions: "",
    willAttend: null,
  });
  const [sbumission, setSubmission] = useState(false);
  const { t } = useTranslation("footer");

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
    <main className="relative flex items-center justify-center w-screen h-screen pb-12">
      <Image
        src={"/images/under-construction.jpeg"}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="z-10 flex justify-center w-full py-2 bg-white">
        <span className="text-[48px] z-10 uppercase">
          {t("underConstruction")}
        </span>
      </div>
    </main>
  );
}
