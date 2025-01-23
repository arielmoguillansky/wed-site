import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export const WGallery = ({ data, galleryRef }) => {
  const [showPrevArrow, setShowPrevArrow] = useState(true);
  const [showNextArrow, setShowNextArrow] = useState(true);
  useEffect(() => {
    const swiper = galleryRef.current;
    if (swiper) {
      swiper.on("slideChange", () => {
        setShowPrevArrow(!swiper.isBeginning);
        setShowNextArrow(!swiper.isEnd);
      });
    }
  }, [galleryRef]);
  return (
    <>
      <div className="relative">
        <div className="absolute z-10 w-20 h-16 transform rotate-90 -right-20 top-1/4">
          <Image
            src="https://res.cloudinary.com/dwinoepzp/image/upload/v1737495095/wed/683956_1_sewwdw.svg"
            alt="Arrow"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="absolute font-sansLight italic text-[20px] top-32 -right-52">
          Te damos ideas <br /> para que te insipires!
        </span>
        {showNextArrow && (
          <div
            className="absolute cursor-pointer -right-20 top-1/2"
            onClick={() => galleryRef.current?.slideNext()}
          >
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1737561719/wed/chevron_gu01vb.svg"
              alt="Next arrow"
              width={50}
              height={50}
            />
          </div>
        )}
        {showPrevArrow && (
          <div
            className="absolute cursor-pointer -left-20 top-1/2"
            onClick={() => galleryRef.current?.slidePrev()}
          >
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1737561719/wed/chevron_gu01vb.svg"
              alt="Next arrow"
              width={50}
              height={50}
              className="transform rotate-180"
            />
          </div>
        )}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            setShowPrevArrow(false);
            galleryRef.current = swiper;
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={"w" + item.id}>
              <div className="relative w-auto h-[768px] mx-auto">
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
      </div>
    </>
  );
};
