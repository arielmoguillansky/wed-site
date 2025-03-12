"use client"

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ReactModal from "react-modal";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  
  const eventHandlers = useMemo(() => ({
    onMouseOver() { setHovered(true); },
    onMouseOut() { setHovered(false); }
  }), []);
  
  return [hovered, eventHandlers];
}

export const IgModal = ({ showModal, setShowModal, setHideModal }) => {
  const [hovered, eventHandlers] = useHover();

  const handleModalClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <ReactModal
      appElement={document?.body}
      onRequestClose={handleModalClose}
      isOpen={showModal}
      shouldCloseOnEsc={true}
      overlayClassName="ig-gallery-overlay"
      className="shadow-sm ig-gallery-content"
    >
      <div
        onClick={handleModalClose}
        className="absolute cursor-pointer top-6 right-6"
      >
        <Image
          src="https://res.cloudinary.com/db03kvlju/image/upload/v1741807764/close-icon_u4ksz7.svg"
          alt="Icon close"
          width={32}
          height={32}
          style={{ float: "left" }}
        />
      </div>
      <p className="text-center text-[20px] mb-4">
        Queremos compartir nuestra aventura contigo. Síguenos y únete a esta
        experiencia. Allí encontrarás todos los detalles de como estamos
        viviendo esta etapa.{" "}
      </p>
      <div
        className="flex items-center justify-center mb-4 gap-x-4"
        {...eventHandlers}
      >
        <Link
          className="relative flex items-center justify-center overflow-hidden rounded-full w-[138px] h-[138px] before:w-40 before:h-40 before:absolute  before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-10"
          href="https://www.instagram.com/foreveerfused?igsh=cW9uejByNXo0Yzdy&utm_source=qr"
          target="_blank"
        >
          <div
            className="absolute flex items-center justify-center overflow-hidden rounded-full w-[86px] h-[86px] md:w-[138px] md:h-[138px] before:w-40 before:h-40 before:absolute  before:top-1/2 before:left-1/2 gradient-bg before:-translate-x-1/2 before:-translate-y-1/2 before:z-10"
            href="https://www.instagram.com/foreveerfused?igsh=cW9uejByNXo0Yzdy&utm_source=qr"
            target="_blank"
          />
          <div className="relative block w-20 h-20 overflow-hidden rounded-full md:w-32 md:h-32">
            <Image
              src="https://res.cloudinary.com/db03kvlju/image/upload/v1741646513/WhatsApp_Image_2025-03-10_at_19.39.01_a2xvdz.jpg"
              fill
              style={{ objectFit: "cover", zIndex: 30 }}
            />
          </div>
        </Link>

        <span className="font-semibold text-[20px]">@foreveerfused</span>
        <style jsx>
          {`
            .gradient-bg {
              background: linear-gradient(
                90deg,
                hsla(333, 100%, 53%, 1) 0%,
                hsla(33, 94%, 57%, 1) 100%
              );
            }
            ${hovered
              ? `
          .gradient-bg {
            animation: spin 1.4s ease infinite;
          }
        `
              : ""}

            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
      <p className="text-center text-[20px]">¡No te lo pierdas!</p>
    </ReactModal>
  );
};