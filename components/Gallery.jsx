import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";

export const Gallery = ({ data }) => {
  const swiperRef = useRef(null);
  const [showPrevArrow, setShowPrevArrow] = useState(true);
  const [showNextArrow, setShowNextArrow] = useState(true);
  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      const handleSlideChange = () => {
        setShowPrevArrow(!swiper.isBeginning);
        setShowNextArrow(!swiper.isEnd);
      };

      swiper.on("slideChange", handleSlideChange);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperRef]);

  return (
    <>
      <div className="relative">
        <div className="absolute z-10 transform rotate-90 xl:w-20 xl:h-16 md:w-16 md:h-12 md:-right-14 md:top-24 xl:-right-20 xl:top-1/4">
          <Image
            src="https://res.cloudinary.com/dwinoepzp/image/upload/v1737495095/wed/683956_1_sewwdw.svg"
            alt="Arrow"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="absolute font-sansLight italic md:text-[18px] xl:text-[20px] md:top-16 md:-right-48 xl:top-32 xl:-right-52">
          Te damos ideas <br /> para que te insipires!
        </span>
        {showNextArrow && (
          <div
            className="absolute cursor-pointer -right-20 top-1/2"
            onClick={() => swiperRef.current?.slideNext()}
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
            onClick={() => swiperRef.current?.slidePrev()}
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
            swiperRef.current = swiper;
          }}
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={"w" + item.id}>
                <div className="relative w-auto md:h-[600px] xl:h-[768px] mx-auto">
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