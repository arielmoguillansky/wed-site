import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import "swiper/css";

export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [initialItem, setInitialItem] = useState(0);

  const data = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  const handleModalOpen = (id) => {
    document.body.style.overflowY = "hidden";
    setInitialItem(id - 1);
    setShowModal(true);
  };

  const handleModalClose = () => {
    document.body.style.overflowY = "auto";
    setShowModal(false);
  };
  return (
    <>
      <div id="content" className="!mt-16">
        {data.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer relative item-${item.id}`}
            onClick={() => handleModalOpen(item.id)}
          >
            <Image
              src={item.src}
              alt="Picture of the author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <ReactModal
        closeTimeoutMS={200}
        appElement={document.body}
        onRequestClose={handleModalClose}
        isOpen={showModal}
        shouldCloseOnEsc={true}
        overlayClassName="hotel-gallery-overlay"
        className="hotel-gallery-content"
      >
        <div
          onClick={handleModalClose}
          className="absolute cursor-pointer top-10 right-10"
        >
          <Image
            src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731973450/wed/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24_lsqovh.svg"
            alt="Icon close"
            width={48}
            height={48}
            style={{ float: "left" }}
          />
        </div>
        <Swiper spaceBetween={50} slidesPerView={1} initialSlide={initialItem}>
          {data.map((item) => (
            <SwiperSlide>
              <div className="relative w-3/4 h-[calc(100vh-500px)] mx-auto">
                <Image
                  src={item.src}
                  alt="Picture of the author"
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ReactModal>
    </>
  );
};
