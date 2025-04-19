import Image from "next/image";

const scheduleData = [
  {
    title: "15:00 Hs - Entrada",
    place: "Jardín oeste",
    icon: "https://res.cloudinary.com/db03kvlju/image/upload/v1740663408/2_kjwpx6.svg",
    width: 200,
  },
  {
    title: "15:30 Hs - Ceremonia",
    place: "Jardín oeste",
    icon: "https://res.cloudinary.com/db03kvlju/image/upload/v1740663406/3_ukpfrn.svg",
    width: 200,
  },
  {
    title: "16:00 Hs - Recepción",
    place: "Jardín este",
    icon: "https://res.cloudinary.com/db03kvlju/image/upload/v1740663405/5_awey9f.svg",
    width: 200,
  },
  {
    title: "17:00 Hs - Ingreso al salón",
    place: "Salón imperial",
    icon: "https://res.cloudinary.com/db03kvlju/image/upload/v1740663405/4_qviajd.svg",
    width: 200,
  },
  {
    title: "18:00 Hs - Cena",
    place: "Salón imperial",
    icon: "https://res.cloudinary.com/db03kvlju/image/upload/v1740663409/1_dkr29x.svg",
    width: 200,
  },
  {
    title: "20:00 Hs - Celebración",
    place: "Jardín de invierno",
    icon: "https://res.cloudinary.com/db03kvlju/image/upload/v1741448074/8-v2_vtupdw.svg",
    width: 300,
  },
  {
    title: "00:00 Hs - Fin de fiesta",
    place: "",
    icon: "https://res.cloudinary.com/db03kvlju/image/upload/v1741448073/9_hi9g3j.svg",
    width: 200,
  },
];
export const Schedule = () =>
  scheduleData.map((item, index) => (
    <div
      key={`agenda-${index}`}
      className={`relative flex ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-center gap-x-[60px] pb-40 last:pb-0`}
    >
      <div
        className={`absolute md:-top-8 -top-4 ${
          index % 2 === 0
            ? "md:right-[55%] right-[60%]"
            : "md:left-[55%] left-[60%]"
        }`}
      >
        <Image
          src={item.icon}
          alt="Picture of the author"
          width={item.width || 200}
          height={200}
          style={{ float: "right" }}
        />
      </div>
      {index === scheduleData.length - 1 ? null : (
        <div className="absolute w-1 h-full bg-softBlue" />
      )}
      <div className="relative w-6 h-6 before:absolute before:rounded-full before:content-[''] before:top-0 before:w-6 before:h-6 before:bg-softBlue" />
      <div
        className={`max-w-[400px] absolute ${
          index % 2 === 0
            ? "md:left-[55%] left-[60%]"
            : "md:right-[55%] right-[56%]"
        }`}
      >
        <h3 className="text-lg uppercase lg:text-xl">{item.title}</h3>
        <p className="mb-2 text-lg lg:text-2xl text-terra font-sansLightItalic">
          {item.place}
        </p>
      </div>
    </div>
  ));
