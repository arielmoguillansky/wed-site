import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { menCode, womenCode } from "@/helpers/dressCode";

export const WGallery = () => {
  const swiperRef = useRef();
  const [showPrevArrow, setShowPrevArrow] = useState(true);
  const [showNextArrow, setShowNextArrow] = useState(true);
  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on("slideChange", () => {
        setShowPrevArrow(!swiper.isBeginning);
        setShowNextArrow(!swiper.isEnd);
      });
    }
  }, [swiperRef]);
  return (
    <>
      <div className="relative">
        <div className="absolute z-10 transform rotate-90 xl:w-20 xl:h-16 md:w-16 md:h-12 md:-right-14 md:top-24 xl:-right-20 lg:top-14 xl:top-1/4">
          <Image
            src="https://res.cloudinary.com/db03kvlju/image/upload/v1740655343/683956_1_sewwdw_rqwouo.svg"
            alt="Arrow"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="hidden md:block absolute font-sansLight italic md:text-[18px] xl:text-[20px] md:top-16 lg:top-[30px] md:-right-48 xl:top-[80px] xl:-right-52">
          Te damos ideas <br /> para que te inspires!
        </span>
        {showNextArrow && (
          <div
            className="absolute z-10 cursor-pointer -right-4 md:-right-20 top-1/2 bg-terra-100 md:bg-transparent"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image
              src="https://res.cloudinary.com/db03kvlju/image/upload/v1740655344/chevron_gu01vb_fsyofh.svg"
              alt="Next arrow"
              width={50}
              height={50}
            />
          </div>
        )}
        {showPrevArrow && (
          <div
            className="absolute z-10 cursor-pointer md:-left-20 -left-4 top-1/2 bg-terra-100 md:bg-transparent"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image
              src="https://res.cloudinary.com/db03kvlju/image/upload/v1740655344/chevron_gu01vb_fsyofh.svg"
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
          {womenCode.map((item) => (
            <SwiperSlide key={"w" + item.id}>
              <div className="relative w-full mx-auto aspect-820-1242">
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
export const MGallery = () => {
  const swiperRef = useRef();
  const [showPrevArrow, setShowPrevArrow] = useState(true);
  const [showNextArrow, setShowNextArrow] = useState(true);
  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on("slideChange", () => {
        setShowPrevArrow(!swiper.isBeginning);
        setShowNextArrow(!swiper.isEnd);
      });
    }
  }, [swiperRef]);
  return (
    <>
      <div className="relative">
        <div className="absolute z-10 transform rotate-90 xl:w-20 xl:h-16 md:w-16 md:h-12 md:-right-14 md:top-24 lg:top-14 xl:-right-20 xl:top-1/4">
          <Image
            src="https://res.cloudinary.com/db03kvlju/image/upload/v1740655343/683956_1_sewwdw_rqwouo.svg"
            alt="Arrow"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="hidden md:block absolute font-sansLight italic md:text-[18px] xl:text-[20px] md:top-16 lg:top-[30px] md:-right-48 xl:top-[80px] xl:-right-52">
          Te damos ideas <br /> para que te inspires!
        </span>
        {showNextArrow && (
          <div
            className="absolute z-10 cursor-pointer -right-4 md:-right-20 top-1/2 bg-terra-100 md:bg-transparent"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image
              src="https://res.cloudinary.com/db03kvlju/image/upload/v1740655344/chevron_gu01vb_fsyofh.svg"
              alt="Next arrow"
              width={50}
              height={50}
            />
          </div>
        )}
        {showPrevArrow && (
          <div
            className="absolute z-10 cursor-pointer md:-left-20 -left-4 top-1/2 bg-terra-100 md:bg-transparent"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image
              src="https://res.cloudinary.com/db03kvlju/image/upload/v1740655344/chevron_gu01vb_fsyofh.svg"
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
          {menCode.map((item) => (
            <SwiperSlide key={"w" + item.id}>
              <div className="relative w-full mx-auto aspect-820-1242">
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
