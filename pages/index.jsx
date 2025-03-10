import CountdownTimer from "@/components/CountdownTimer";
import { MGallery, WGallery } from "@/components/FashionGallery";
import { Gallery } from "@/components/Gallery";
import { Rsvp } from "@/components/Rsvp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MapBoxMap from "../components/MapBoxMap";
import { Schedule } from "@/components/Schedule";
import Link from "next/link";

export default function Home({ weatherData }) {
  const [wMood, setWMood] = useState(true);
  const [isNavSticky, setIsNavSticky] = useState(false); // Add state for sticky nav
  const [showDropdown, setShowDropdown] = useState(false); // Add state for sticky nav
  const headerRef = useRef(null); // Create a ref for the header

  useEffect(() => {
    function setViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavSticky(!entry.isIntersecting);
        setShowDropdown(false);
      },
      {
        rootMargin: "100%", // Use the viewport as the root
        threshold: 1, // Trigger when the entire header is out of view
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const handleNavLink = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      setShowDropdown(false);

      const offset = 100;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        ref={headerRef}
        className="relative flex items-center justify-center w-screen"
        style={{
          height: "calc(var(--vh, 1vh) * 100)",
        }}
      >
        <div className="absolute h-full w-screen overflow-hidden dark-overlay !z-0">
          <video
            autoPlay
            muted={true}
            playsInline
            controls={false}
            preload="auto"
            loop
            src={
              "https://res.cloudinary.com/db03kvlju/video/upload/v1740655368/02cb7c74-bbc9-41b7-94a5-4f8c9e8d6008_mtmo7w_vqsbdm.mov"
            }
            className="object-cover object-center absolute inset-x-0 top-1/2 -translate-y-1/2 h-[inherit] w-[inherit]"
          />
        </div>
        <div className="z-10 px-4 md:px-12">
          <div className="flex items-center gap-x-12 text-pearl text-[90px] font-serif justify-center mb-4">
            <h1 className="xl:text-[120px] lg:text-[60px] text-[40px] relative before:absolute before:rounded-full before:-right-10 before:top-1/2 md:before:w-2 before:h-2 before:bg-pearl after:-left-6 after:top-1/2 md:after:w-2 after:h-2 after:bg-pearl after:absolute after:rounded-full">
              Laura{" "}
              <span className="lg:text-[32px] xl:text-[60px] text-[24px]">
                &
              </span>{" "}
              Ariel
            </h1>
          </div>
        </div>
        <Link
          href="#info"
          onClick={(e) => {
            handleNavLink(e, "info");
          }}
          className="absolute z-50 flex flex-col items-center justify-center bottom-6 gap-y-4 md:w-full md:h-14"
        >
          <p className="text-pearl md:text-[32px] text-[20px] bottom-4 italic">
            La boda
          </p>
          <Image
            className="animate-bounce-arrow"
            src="https://res.cloudinary.com/db03kvlju/image/upload/v1741607109/chevron_right_24dp_DEDEE1_FILL0_wght400_GRAD0_opsz24_wfgyrg.svg"
            alt="Down arrow"
            priority
            width={24}
            height={24}
          />
        </Link>
      </section>
      <main>
        <nav
          className={`hidden sticky z-10 top-0 md:flex items-center justify-center w-full p-10 uppercase before:absolute before:w-full before:h-full h-12 before:content-[''] before:-z-10 before:opacity-75 before:bg-white gap-x-10 before:backdrop-blur-sm transition-transform duration-300 ease-in-out shadow-md ${
            isNavSticky
              ? "translate-y-0 opacity-1"
              : "-translate-y-full opacity-0"
          }`}
        >
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "info");
            }}
            href="#info"
          >
            Info
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "schedule");
            }}
            href="#schedule"
          >
            Cronograma
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "gallery");
            }}
            href="#gallery"
          >
            Galería
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "dress-code");
            }}
            href="#dress-code"
          >
            Vestimenta
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "weather");
            }}
            href="#weather"
          >
            Clima
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "map");
            }}
            href="#map"
          >
            Mapa
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "rsvp");
            }}
            href="#rsvp"
          >
            Rsvp
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "gifts");
            }}
            href="#gifts"
          >
            Regalos
          </Link>
          <Link
            className="nav-link"
            onClick={(e) => {
              handleNavLink(e, "streaming");
            }}
            href="#streaming"
          >
            Streaming
          </Link>
        </nav>
        <nav
          className={`md:hidden fixed z-50 top-0 flex items-center justify-center w-full p-10 uppercase before:absolute before:w-full before:h-full h-12 before:content-[''] before:-z-10 before:opacity-75 before:bg-white gap-x-10 before:left-0 before:backdrop-blur-sm transition-transform duration-300 ease-in-out ${
            isNavSticky
              ? "translate-y-0 opacity-1"
              : "-translate-y-full opacity-0"
          } ${showDropdown ? "" : "shadow-md"}`}
        >
          <div onClick={() => setShowDropdown(!showDropdown)}>
            <Image
              className={showDropdown ? "hidden" : "block"}
              src="https://res.cloudinary.com/db03kvlju/image/upload/v1741464159/menu_24dp_594435_FILL0_wght400_GRAD0_opsz24_pieetf.svg"
              alt="Menu"
              width={24}
              height={24}
            />
            <Image
              className={showDropdown ? "block" : "hidden"}
              src="https://res.cloudinary.com/db03kvlju/image/upload/v1741465026/close_24dp_594435_FILL0_wght400_GRAD0_opsz24_b5mi0r.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </div>
          <div
            className={`${
              showDropdown ? "block" : "hidden"
            } absolute w-full h-auto top-[80px] space-y-12 before:absolute before:w-full before:h-[calc(100%+16px)] before:content-[''] before:-z-10 before:top-0 before:opacity-75 before:bg-white gap-x-10 before:backdrop-blur-sm  py-4`}
          >
            <Link
              className="block text-center"
              href="#info"
              onClick={(e) => {
                handleNavLink(e, "info");
              }}
            >
              Info
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "schedule");
              }}
              href="#schedule"
            >
              Cronograma
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "gallery");
              }}
              href="#gallery"
            >
              Galería
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "dress-code");
              }}
              href="#dress-code"
            >
              Vestimenta
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "weather");
              }}
              href="#weather"
            >
              Clima
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "map");
              }}
              href="#map"
            >
              Mapa
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "gifts");
              }}
              href="#gifts"
            >
              Regalos
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "rsvp");
              }}
              href="#rsvp"
            >
              Rsvp
            </Link>
            <Link
              className="block text-center"
              onClick={(e) => {
                handleNavLink(e, "streaming");
              }}
              href="#streaming"
            >
              Streaming
            </Link>
          </div>
        </nav>
        <section
          id="info"
          className="px-4 mb-28 md:mt-40 md:px-0 mt-14 md:mb-40"
        >
          <div className="mx-auto max-w-[1200px] text-center">
            <h2 className="md:text-[48px] xl:text-[60px] text-[32px] md:mb-16 mb-10 leading-none font-serif">
              Mayo 17, 2025
            </h2>
            <p className="uppercase md:text-[20px] mb-2 font-sansMed">
              Palacio Sans Souci
            </p>
            <p className="text-terra md:text-[24px] text-[18px] font-sansLightItalic">
              Paz 705, Victoria, Buenos Aires
            </p>
          </div>
          <div className="my-20 md:my-9">
            <CountdownTimer />
          </div>
        </section>
        <section
          id="schedule"
          className="mb-28 md:mb-40 px-4 md:px-0 lg:max-w-[720px] xl:max-w-[1300px] mx-auto"
        >
          <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] text-center font-sansLight">
            Cronograma
          </h2>
          <p className="text-terra text-[24px] text-center mt-2 max-w-[720px] mx-auto font-sansLightItalic mb-14">
            Organización
          </p>
          <Schedule />
        </section>
        <section id="gallery" className="px-4 mb-28 md:mb-40 md:px-0">
          <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] text-center font-sansLight">
            Galería
          </h2>
          <p className="text-terra text-[24px] text-center mb-8 mt-2 max-w-[720px] mx-auto font-sansLightItalic md:mb-14">
            Memorias
          </p>
          <Gallery />
        </section>
        <section
          id="dress-code"
          className="mb-28 md:mb-40 px-4 w-full md:px-8 xl:lg:max-w-[720px] xl:max-w-[1300px] mx-auto"
        >
          <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] mb-8 md:mb-0 text-center font-sansLight">
            Código de vestimenta
          </h2>
          <h2 className="md:text-[32px] xl:text-[40px] text-[28px] mb-14 leading-none font-serif italic flex justify-center">
            - Elegante -
          </h2>
          <div className="flex-col items-center justify-center flex md:flex-row mt-[calc(64px+54px)]">
            <div className="w-full md:w-1/2">
              <div className="relative w-full p-4 bg-white border md:w-3/4 text-terra md:mx-auto xl:mx-0">
                <div className="absolute md:top-[-50px] top-[-50px] xl:top-[-54px] left-[-1px] flex">
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
            <div className="text-terra w-full xl:w-1/3 text-[20px] md:px-8 xl:px-0 mx-auto font-sansLightItalic place-content-center">
              <div className="md:mb-8 md:h-[300px]">
                <p className="hidden mb-4 font-sans md:block text-terra">
                  Queremos que vayas formal pero sin perder la comodidad para
                  que puedas bailar.
                </p>
                {wMood ? (
                  <div className="p-4 mt-4 border border-terra">
                    <h4 className="mb-4">PARA ELLAS</h4>
                    <p className="text-[18px] mb-4">
                      Un vestido de cóctel o un traje pantalón/falda larga
                      elegante
                    </p>
                    <p className="text-[18px] mb-8 md:mb-4">
                      Zapatos de tacón alto, medio o bajo - según tu preferencia
                      y comodidad
                    </p>
                    <p className="mb-2 font-sans">¡Cuidado con el color!</p>
                    <p className="mb-4">
                      El blanco - con sus variantes - es un color hermoso, pero
                      en nuestra boda, es <b>exclusivo para la novia</b>.
                    </p>
                    <div className="w-full overflow-x-scroll overflow-y-hidden md:overflow-x-hidden">
                      <div className="relative w-fit">
                        <span className="block mb-2">Evita estos colores!</span>
                        <div className="flex mb-4 md:gap-x-4 gap-x-2">
                          <div className="w-12 h-12 bg-[#F5F5F5] rounded-full" />
                          <div className="w-12 h-12 bg-[#EFECE7] rounded-full" />
                          <div className="w-12 h-12 bg-[#ECE9E5] rounded-full" />
                          <div className="w-12 h-12 bg-[#E5E1D8] rounded-full" />
                          <div className="w-12 h-12 bg-[#E4DFDA] rounded-full" />
                          <div className="w-12 h-12 bg-[#E1D8CE] rounded-full" />
                        </div>
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
        <section
          id="weather"
          className="mb-28 md:mb-40 px-4 md:px-0 lg:max-w-[720px] xl:max-w-[1300px] mx-auto"
        >
          <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] text-center font-sansLight">
            Clima
          </h2>
          <p className="text-terra text-[24px] text-center mb-8 mt-2 max-w-[720px] mx-auto font-sansLightItalic md:mb-14">
            Ideal para saber cómo abrigarse
          </p>
          <p className="text-[20px] md:text-[24px] max-w-[640px] mx-auto mb-10">
            En esta época, Buenos Aires está en{" "}
            <b className="text-terra">otoño</b>, con temperaturas típicamente
            cálidas y agradables durante el día y un poco más frescas por la
            noche. Es por eso que te recomendamos vestir en capas para adaptarte
            al clima cambiante del día
          </p>
          <div className="mx-auto space-y-4 w-fit">
            <p className="text-brown text-[24px]">
              Mínima{" "}
              <span className="font-sans text-[42px] ml-2">
                {Math.round(weatherData.daily.temperature_2m_min[0])}
              </span>{" "}
              °C
            </p>
            <p className="text-brown text-[24px]">
              Máxima{" "}
              <span className="font-sans text-[42px] ml-2">
                {Math.round(weatherData.daily.temperature_2m_max[0])}
              </span>{" "}
              °C
            </p>
          </div>
        </section>
        <section id="map" className="mb-40">
          <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] text-center font-sansLight">
            Mapa
          </h2>
          <p className="text-terra text-[24px] text-center mb-8 mt-2 max-w-[720px] mx-auto font-sansLightItalic md:mb-14">
            Todo lo necesario para saber cómo llegar
          </p>
          <MapBoxMap />
        </section>
        <section
          id="gifts"
          className="mb-28 md:mb-40 px-4 md:px-0 lg:max-w-[720px] xl:max-w-[1300px] mx-auto"
        >
          <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] text-center font-sansLight">
            Regalos
          </h2>
          <p className="text-terra text-[24px] text-center mb-8 mt-2 max-w-[720px] mx-auto font-sansLightItalic md:mb-14">
            Por si te caímos bien y querés regalarnos algo
          </p>
          <p className="text-[20px] md:text-[24px] max-w-[640px] mx-auto mb-10">
            Tiempos modernos requieren soluciones modernas. Te evitamos el
            trabajo de pensar qué regalarnos, y a cambio te proponemos una
            lluvia de sobres virtual.
          </p>
          <p className="text-[20px] md:text-[24px] max-w-[640px] mx-auto mb-14">
            Puedes enviar tu sobre a las siguientes cuentas bancarias -según la
            moneda que prefieras:
          </p>

          <div className="max-w-[640px] mx-auto space-y-4">
            <h4 className="mx-auto mb-8 w-fit">
              <b>ARS</b>
            </h4>
            <p>
              Alias: <span className="font-semibold">POEMA.CANCHA.MURO</span>
            </p>
            <p>
              CBU: <span className="font-semibold">0070702430004000648375</span>
            </p>
          </div>
          <hr className="max-w-[640px] mx-auto w-full my-8 text-terra" />
          <div className="max-w-[640px] mx-auto space-y-4">
            <h4 className="mx-auto mb-8 w-fit">
              <b>USD</b>
            </h4>
            <p>
              Alias: <span className="font-semibold">LONJA.MARTES.CIFRA</span>
            </p>
            <p>
              CBU: <span className="font-semibold">0070702431004001562846</span>
            </p>
          </div>
        </section>
        <section id="rsvp" className="px-4 mb-28 md:mb-40 md:px-0">
          <Rsvp />
        </section>
        <section id="streaming" className="px-4 mb-28 md:mb-40 md:px-0">
          <h2 className="uppercase md:text-[48px] xl:text-[60px] text-[32px] text-center font-sansLight">
            Streaming
          </h2>
          <p className="text-terra text-[24px] text-center mb-8 mt-2 max-w-[720px] mx-auto font-sansLightItalic md:mb-14">
            Para que puedas acompañarnos desde cualquier lugar
          </p>
          <p className="max-w-[720px] mx-auto text-center md:text-[24px] text-[20px] italic">
            Aquí estará disponible el link para que puedas ver la ceremonia en
            vivo y no te pierdas ningún detalle.
          </p>
        </section>
      </main>
      <footer className="flex items-center justify-center p-10 bg-terra text-pearl gap-x-2 md:text-[20px] text-[18px]">
        Hecho con
        <Image src={"/images/hearth.svg"} width={28} height={28} />x Ari y Lau
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://archive-api.open-meteo.com/v1/era5?latitude=-34.4467052&longitude=-58.5445323&start_date=2021-05-17&end_date=2021-05-17&daily=temperature_2m_max,temperature_2m_min"
  );
  const weatherData = await response.json();

  return {
    props: {
      weatherData,
    },
    revalidate: 86400,
  };
}
