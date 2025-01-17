import CountdownTimer from "@/components/CountdownTimer";
import { Gallery } from "@/components/Gallery";
import { Rsvp } from "@/components/Rsvp";
import { isDateInPast } from "@/helpers/helpers";
import Image from "next/image";
import { useTranslations } from "use-intl";

const countdownDate = new Date("2025-05-17T14:30:00");

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="space-y-40 overflow-x-hidden">
      <section className="relative flex items-center justify-center w-screen h-screen">
        <Image
          src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg"
          alt="Picture of the author"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="z-10">
          <div className="flex items-center gap-x-12 text-white text-[90px] justify-center uppercase mb-4">
            <h1 className="relative before:absolute before:rounded-full before:content-[''] before:-right-8 before:top-1/2 before:w-2 before:h-2 before:bg-white">
              Laura
            </h1>
            <h1>Ariel</h1>
          </div>
          <p className="xl:max-w-[720px] text-center text-white text-[30px]">
            Nos casamos y queremos compartir este soñado momento con ustedes!
            Podríamos en un parrafo más largo para que ocupe.
          </p>
        </div>
      </section>
      <section className="">
        <div className="mx-auto xl:max-w-[1200px] text-center">
          <h2 className="text-[60px] mb-14 leading-none font-serif">
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
      <section className="xl:max-w-[1400px] mx-auto">
        <div className="flex items-center justify-center gap-x-6">
          <h2 className="uppercase text-[60px] font-sansLight">Nuestra</h2>
          <div className="relative w-2 h-2 before:absolute before:rounded-full before:content-[''] before:top-1/2 before:w-2 before:h-2 before:bg-navy"></div>
          <h2 className="uppercase text-[60px] font-sansLight">Historia</h2>
          <div className="relative w-2 h-2 before:absolute before:rounded-full before:content-[''] before:top-1/2 before:w-2 before:h-2 before:bg-navy"></div>
          <h2 className="uppercase text-[60px] font-sansLight">Juntos</h2>
        </div>
        <p className="text-terra text-[20px] text-center mt-2 max-w-[720px] mx-auto font-sansLightItalic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque
          numquam odio ut. Nihil dignissimos accusamus tempore modi recusandae.
        </p>
        <div className="flex items-center justify-between gap-x-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[48px] text-nowrap font-serif mb-8">
              Laura Medrano
            </h3>
            <p className="text-base max-w-[295px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              nesciunt a minima veniam ut aspernatur.
            </p>
          </div>
          <div className="w-[498px] h-[498px] relative mt-[60px] flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731614905/wed/WhatsApp_Image_2024-11-14_at_17.07.03_dzzl0m.jpg"
              alt="Picture of the author"
              fill
              style={{ objectFit: "cover", borderRadius: "100%" }}
            />
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731612567/wed/h3-rev-img-2_bybnwh.png"
              alt="Picture of the author"
              fill
              style={{
                objectFit: "cover",
                transform: "translateX(-20px)",
              }}
            />
            <Image
              src="https://res.cloudinary.com/dwinoepzp/image/upload/v1731614750/wed/h3-rev-img-3_u0trzj.png"
              alt="Picture of the author"
              width={284}
              height={284}
              style={{
                objectFit: "contain",
                transform: "translateX(-84px)",
                bottom: "0",
                position: "absolute",
                left: "0",
              }}
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[48px] text-nowrap font-serif mb-8">
              Ariel Moguillansky
            </h3>
            <p className="text-base max-w-[295px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              nesciunt a minima veniam ut aspernatur.
            </p>
          </div>
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
        <h2 className="uppercase text-[60px] text-center font-sansLight">
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
        <h2 className="uppercase text-[60px] text-center font-sansLight">
          Galería
        </h2>
        <p className="text-terra text-[20px] text-center mt-2 max-w-[720px] mx-auto font-sansLightItalic">
          Memorias
        </p>
        <Gallery />
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
