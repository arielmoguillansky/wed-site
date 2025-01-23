import CountdownTimer from "@/components/CountdownTimer";
import { Gallery } from "@/components/Gallery";
import { Rsvp } from "@/components/Rsvp";
import { isDateInPast } from "@/helpers/helpers";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "use-intl";
import { useLocalStorage } from "react-use";

const MAX_PETITIONS_PER_DAY = 4;

const countdownDate = new Date("2025-05-17T14:30:00");
const womenCode = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496873/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.53_1_gonvdg.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737572040/wed/moodboard/WhatsApp_Image_2025-01-22_at_11.31.56_hj2n54.jpg",
  },

  {
    id: 3,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496873/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.53_hatfuj.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496872/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.52_2_ugt4pq.jpg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496872/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.52_1_ymbsbw.jpg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496872/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.52_hvhr41.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496872/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.51_3_nkapgr.jpg",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496872/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.51_1_f1eiz9.jpg",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496871/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.51_rfugoy.jpg",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496872/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.51_2_obrogj.jpg",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496871/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.50_2_kud2ku.jpg",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496871/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.50_1_j7uisz.jpg",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496871/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.50_h0k0y4.jpg",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496871/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.49_go4pii.jpg",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496873/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.52_3_zt1uu1.jpg",
  },
];
const menCode = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496874/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.55_aw7ulv.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496874/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.55_1_sewnor.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496874/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.54_3_z5uh4k.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496874/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.54_2_zo1vzp.jpg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496874/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.53_3_phpz3z.jpg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496874/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.54_1_mbe9tn.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496873/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.54_ksu4z2.jpg",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dwinoepzp/image/upload/v1737496873/wed/moodboard/WhatsApp_Image_2025-01-21_at_11.53.53_2_untzip.jpg",
  },
];

const WGallery = () => {
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
          {womenCode.map((item) => (
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
const MGallery = () => {
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
          {menCode.map((item) => (
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

export default function Home() {
  const t = useTranslations("HomePage");
  const [petitionsLeft, setPetitionsLeft] = useLocalStorage(
    "petitionsLeft",
    MAX_PETITIONS_PER_DAY
  );
  const [weatherData, setWeatherData] = useLocalStorage("weatherData", {});
  const today = new Date().toISOString().slice(0, 10); // format date YYYY-MM-DD

  const [wMood, setWMood] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (petitionsLeft > 0) {
        const response = await fetch(
          "https://archive-api.open-meteo.com/v1/era5?latitude=-34.4467052&longitude=-58.5445323&start_date=2021-05-17&end_date=2021-05-17&daily=temperature_2m_max,temperature_2m_min"
        );
        const data = await response.json();
        setWeatherData(data.daily);
        setPetitionsLeft(petitionsLeft - 1);
      }
    };

    fetchData();
  }, [today]);

  return (
    <main className="space-y-40 overflow-x-hidden">
      <section className="relative flex items-center justify-center w-screen h-screen">
        {/* <Image
          src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg"
          alt="Picture of the author"
          fill
          style={{ objectFit: "cover" }}
        /> */}
        <div
          className={`absolute h-full w-screen overflow-hidden dark-overlay !z-0`}
        >
          <video
            autoPlay
            muted={true}
            playsInline
            controls={false}
            preload="auto"
            loop
            src={
              "https://res.cloudinary.com/dwinoepzp/video/upload/v1737315864/wed/02cb7c74-bbc9-41b7-94a5-4f8c9e8d6008_mtmo7w.mov"
            }
            className={`object-cover object-center absolute inset-x-0 top-1/2 -translate-y-1/2 h-[inherit] w-[inherit]`}
          />
        </div>
        <div className="z-10 px-12">
          <div className="flex items-center gap-x-12 text-white text-[90px] justify-center uppercase mb-4">
            <h1 className="md:md:text-[48px] xl:text-[60px] text-[48px] relative before:absolute before:rounded-full before:content-[''] before:-right-8 before:top-1/2 before:w-2 before:h-2 before:bg-white">
              Laura
            </h1>
            <h1 className="md:md:text-[48px] xl:text-[60px] text-[48px]">
              Ariel
            </h1>
          </div>
          <p className="xl:max-w-[720px] text-center text-white md:text-[30px] text-[24px]">
            Nos casamos y queremos compartir este soñado momento con ustedes!
            Podríamos en un parrafo más largo para que ocupe.
          </p>
        </div>
      </section>
      <section className="">
        <div className="mx-auto xl:max-w-[1200px] text-center">
          <h2 className="md:text-[48px] xl:text-[60px] mb-14 leading-none font-serif">
            Mayo 17, 2025
          </h2>
          <p className="uppercase text-[18px] mb-2 font-sansMed">
            Palacio Sans Souci
          </p>
          <p className="text-terra text-[20px] font-sansLightItalic">
            Paz 705, Victoria, Buenos Aires
          </p>
        </div>
        <div className="mt-9">
          {!isDateInPast(countdownDate) && (
            <CountdownTimer deadline={countdownDate} />
          )}
        </div>
      </section>

      <section className="relative flex items-center justify-center w-screen h-[600px]">
        <Image
          src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg"
          alt="Picture of the author"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="z-10 flex flex-col items-center justify-center">
          <h1 className="text-white font-serif font-bold text-[90px] mb-16">
            Guarda la fecha
          </h1>
          <p className="text-[18px] font-sansMed text-center text-white w-[468px]">
            Sucribite para recibir recordatorios en tu celular cuando se acerque
            la fecha del gran momento!
          </p>
          <button className="py-6 mt-10 text-base uppercase bg-white px-14 text-terra">
            Recuerdame!
          </button>
        </div>
      </section>
      <section className="max-w-[1300px] mx-auto">
        <h2 className="uppercase md:text-[48px] xl:text-[60px] text-center font-sansLight">
          Cronograma
        </h2>
        <p className="text-terra text-[20px] text-center mt-2 max-w-[720px] mx-auto font-sansLightItalic">
          Organización
        </p>
        <div className="relative flex justify-center gap-x-[60px] pb-32 mt-14">
          <div className="w-[400px]">
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731700775/wed/h3-icon-1_ech5kd.png"
              alt="Picture of the author"
              width={115}
              height={115}
              style={{ float: "right" }}
            />
          </div>
          <div className="absolute w-1 h-full bg-softBlue" />
          <div className="relative w-6 h-6 before:absolute before:rounded-full before:content-[''] before:top-0 before:w-6 before:h-6 before:bg-softBlue" />
          <div className="max-w-[400px]">
            <h3 className="text-base uppercase">Ceremonia</h3>
            <p className="mb-2 text-base text-terra font-sansLightItalic">
              Lugar dentro del palacio
            </p>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              necessitatibus illo praesentium ipsam deleniti, ullam ipsum
              accusamus cum ratione repudiandae sunt esse quia inventore unde
              doloribus. Consequuntur illo dolores veniam.
            </p>
          </div>
        </div>
        <div className="relative flex flex-row-reverse justify-center gap-x-[60px] pb-32">
          <div className="w-[400px]">
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731700775/wed/h3-icon-2_rus0vb.png"
              alt="Picture of the author"
              width={115}
              height={115}
              style={{ float: "left" }}
            />
          </div>
          <div className="absolute w-1 h-full bg-softBlue" />
          <div className="relative w-6 h-6 before:absolute before:rounded-full before:content-[''] before:top-0 before:w-6 before:h-6 before:bg-softBlue" />
          <div className="max-w-[400px] text-end">
            <h3 className="text-base uppercase">Ceremonia</h3>
            <p className="mb-2 text-base text-terra font-sansLightItalic">
              Lugar dentro del palacio
            </p>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              necessitatibus illo praesentium ipsam deleniti, ullam ipsum
              accusamus cum ratione repudiandae sunt esse quia inventore unde
              doloribus. Consequuntur illo dolores veniam.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center gap-x-[60px] pb-32">
          <div className="w-[400px]">
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731700775/wed/h3-icon-3_f5sg3c.png"
              alt="Picture of the author"
              width={115}
              height={115}
              style={{ float: "right" }}
            />
          </div>
          <div className="absolute w-1 h-full bg-softBlue" />
          <div className="relative w-6 h-6 before:absolute before:rounded-full before:content-[''] before:top-0 before:w-6 before:h-6 before:bg-softBlue" />
          <div className="max-w-[400px]">
            <h3 className="text-base uppercase">Ceremonia</h3>
            <p className="mb-2 text-base text-terra font-sansLightItalic">
              Lugar dentro del palacio
            </p>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              necessitatibus illo praesentium ipsam deleniti, ullam ipsum
              accusamus cum ratione repudiandae sunt esse quia inventore unde
              doloribus. Consequuntur illo dolores veniam.
            </p>
          </div>
        </div>
        <div className="relative flex flex-row-reverse justify-center gap-x-[60px] pb-32">
          <div className="w-[400px]">
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731700775/wed/h3-icon-4_byghg5.png"
              alt="Picture of the author"
              width={115}
              height={115}
              style={{ float: "left" }}
            />
          </div>
          <div className="relative w-6 h-6 before:absolute before:rounded-full before:content-[''] before:top-0 before:w-6 before:h-6 before:bg-softBlue" />
          <div className="max-w-[400px] text-end">
            <h3 className="text-base uppercase">Ceremonia</h3>
            <p className="mb-2 text-base text-terra font-sansLightItalic">
              Lugar dentro del palacio
            </p>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              necessitatibus illo praesentium ipsam deleniti, ullam ipsum
              accusamus cum ratione repudiandae sunt esse quia inventore unde
              doloribus. Consequuntur illo dolores veniam.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="uppercase md:text-[48px] xl:text-[60px] text-center font-sansLight">
          Galería
        </h2>
        <p className="text-terra text-[20px] text-center mt-2 max-w-[720px] mx-auto font-sansLightItalic">
          Memorias
        </p>
        <Gallery />
      </section>
      <section className="w-full px-8 xl:max-w-[1300px] mx-auto">
        <h2 className="uppercase md:text-[48px] xl:text-[60px] text-center font-sansLight mb-12">
          Código de vestimenta
        </h2>
        <h2 className="md:text-[40px] xl:text-[48px] mb-14 leading-none font-serif italic flex justify-center">
          - Elegante -
        </h2>
        <div className="flex">
          <div className="w-1/2 ">
            <div className="relative w-3/4 p-4 bg-white border text-terra md:mx-auto xl:mx-0">
              <div className="absolute md:top-[-50px] xl:top-[-54px] left-[-1px] flex">
                <button
                  className={`text-terra border uppercase md:text-[16px] xl:text-[20px] p-4 text-center max-w-[720px] mx-auto font-sans ${
                    wMood
                      ? "border-terra border-b-transparent bg-white"
                      : "border-transparent"
                  }`}
                  onClick={() => setWMood(true)}
                >
                  Mujer
                </button>
                <button
                  className={`text-terra border uppercase md:text-[16px] xl:text-[20px] p-4 text-center max-w-[720px] mx-auto font-sans ${
                    !wMood
                      ? "border-terra border-b-transparent bg-white"
                      : "border-transparent"
                  }`}
                  onClick={() => setWMood(false)}
                >
                  Hombre
                </button>
              </div>
              {wMood ? <WGallery /> : <MGallery />}
            </div>
          </div>
          <div className="text-terra xl:w-1/3 text-[20px] px-8 xl:px-0 mx-auto font-sansLightItalic place-content-center">
            <div className="mb-8 h-[300px]">
              <p className="mb-4 font-sans text-terra">
                Queremos que vayas formal pero sin perder la comodidad para que
                puedas bailar.
              </p>
              {wMood ? (
                <div className="p-4 mt-4 border border-terra">
                  <h4 className="mb-4">PARA ELLAS</h4>
                  <p className="text-[18px] mb-4">
                    Un vestido de cóctel o un traje pantalón/falda larga
                    elegante
                  </p>
                  <p className="text-[18px] mb-4">
                    Zapatos de tacón alto, medio o bajo - según tu preferencia y
                    comodidad
                  </p>
                  <p className="mb-2 font-sans">¡Cuidado con el color!</p>
                  <p className="mb-4">
                    El blanco - con sus variantes - es un color hermoso, pero en
                    nuestra boda, es exclusivo para la novia.
                  </p>
                  <div className="relative w-fit">
                    <div className="absolute z-10 h-12 top-12 xl:-right-16 md:-right-14 w-14">
                      <Image
                        src="https://res.cloudinary.com/dwinoepzp/image/upload/v1737495095/wed/683956_1_sewwdw.svg"
                        alt="Arrow"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <span className="absolute font-sans italic xl:top-28 md:top-24 xl:-right-40 md:-right-16 xl:-rotate-12">
                      Evita estos colores!
                    </span>
                    <div className="flex mb-4 gap-x-4">
                      <div className="w-12 h-12 bg-[#F5F5F5] rounded-full" />
                      <div className="w-12 h-12 bg-[#EFECE7] rounded-full" />
                      <div className="w-12 h-12 bg-[#ECE9E5] rounded-full" />
                      <div className="w-12 h-12 bg-[#E5E1D8] rounded-full" />
                      <div className="w-12 h-12 bg-[#E4DFDA] rounded-full" />
                      <div className="w-12 h-12 bg-[#E1D8CE] rounded-full" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 mt-4 border border-terra">
                  <h4 className="mb-4">PARA ELLOS</h4>
                  <p className="text-[18px] mb-4">
                    Traje formal de dos o tres piezas, del color de tu
                    preferencia, con pantalones y chaqueta que combinen
                  </p>
                  <p className="text-[18px] mb-4">
                    Camisa de manga larga, con cuello alto y botones
                  </p>
                  <p className="text-[18px]">
                    Zapatos de cuero, estilo clásico (oxford, legate, brogue,
                    derby, con hebilla, mocasines)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] mx-auto">
        <h2 className="uppercase md:text-[48px] xl:text-[60px] text-center font-sansLight">
          Clima
        </h2>
        <p className="mb-6 text-terra text-[20px] text-center mt-2 max-w-[720px] mx-auto font-sansLightItalic">
          Ideal para saber cómo abrigarse
        </p>
        <p className="text-[24px] max-w-[640px] mx-auto mb-6">
          En esta época, Buenos Aires está en{" "}
          <b className="text-terra">otoño</b>, con temperaturas típicamente
          frescas y agradables durante el día y un poco más frías por la noche.
          Es por eso que te recomendamos vestir en capas para adaptarse al clima
          cambiante del día
        </p>
        <div className="mx-auto space-y-4 w-fit">
          <p className="text-brown text-[32px]">
            Mínima{" "}
            <span className="font-sans text-[42px]">
              {Math.round(weatherData["temperature_2m_min"])}
            </span>{" "}
            °C
          </p>
          <p className="text-brown text-[32px]">
            Máxima{" "}
            <span className="font-sans text-[42px]">
              {Math.round(weatherData["temperature_2m_max"])}
            </span>{" "}
            °C
          </p>
        </div>
      </section>
      <section>
        <h2 className="uppercase md:text-[48px] xl:text-[60px] text-center font-sansLight">
          Mapa
        </h2>
        <p className="text-terra text-[20px] text-center mt-2 max-w-[720px] mx-auto font-sansLightItalic">
          Todo lo necesario para saber cómo llegar
        </p>
        <div></div>
      </section>
      <div className="my-6" />
      <Rsvp />
    </main>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../lang/${context.locale}.json`)).default,
    },
  };
}
