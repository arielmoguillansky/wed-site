import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

export default function Invitation() {
  const router = useRouter();
  const { code: invCode } = router.query;
  const [guest, setGuest] = useState(null);
  const t = useTranslations("InvitationPage");

  const guestList = [
    {
      name: "Cesar",
      code: "cesar-munoz",
      group: false,
    },
    {
      name: "Rene",
      code: "rene-jose",
      group: false,
    },
    {
      name: "Alfredo",
      code: "alfredo-gesell",
      group: false,
    },
    {
      name: "María Restrepo",
      code: "maria-restrepo",
      group: false,
    },
    {
      name: "Tatiana Mejía",
      code: "tatiana-mejia",
      group: false,
    },
    {
      name: "Carlos y Luz Ángela",
      code: "carlos-luz",
      group: true,
    },
    {
      name: "Esteban",
      code: "esteban-benalcazar",
      group: false,
    },
    {
      name: "Charles y Wilmary",
      code: "charles-familia",
      group: true,
    },
    {
      name: "Alba y Familia",
      code: "alba-flia",
      group: true,
    },
    {
      name: "Marleni y Familia",
      code: "marleni-flia",
      group: true,
    },
    {
      name: "Nicole",
      code: "nicole",
      group: false,
    },
    {
      name: "Gregoria y Familia",
      code: "gregoria-flia",
      group: true,
    },
    {
      name: "Edilma y Corina Klinger",
      code: "edilma-klinger",
      group: true,
    },
    {
      name: "Ivan y Beauty Prieto",
      code: "ivan-beauty",
      group: true,
    },
    {
      name: "Rodryceth y Claudia",
      code: "rodryceth-claudia",
      group: true,
    },
    {
      name: "Sindy y Mario",
      code: "sindy-mario",
      group: true,
    },
    {
      name: "Polo, Lida y María Ángeles",
      code: "polo-lida-maria",
      group: true,
    },
    {
      name: "Marnin Medrano",
      code: "marnin-medrano",
      group: false,
    },
    {
      name: "Mayra Medrano",
      code: "mayra-medrano",
      group: false,
    },
    {
      name: "Matilde Mesa",
      code: "matilde-mesa",
      group: false,
    },
    {
      name: "Julio Edgar",
      code: "julio-edgar",
      group: false,
    },
    {
      name: "Carmen Eliza y Familia",
      code: "carmen-flia",
      group: true,
    },
    {
      name: "Floralba Ríos",
      code: "floralba-rios",
      group: false,
    },
    {
      name: "Ibeth Yesenia Ríos",
      code: "ibeth-yesenia",
      group: false,
    },
    {
      name: "Martha Rentería y Familia",
      code: "martha-renteria",
      group: true,
    },
    {
      name: "Luisa Marquinez",
      code: "luisa-marquinez",
      group: false,
    },
    {
      name: "Familia Medrano",
      code: "familia-medrano",
      group: true,
    },
    {
      name: "Kelly Polo",
      code: "kelly-polo",
      group: true,
    },
    {
      name: "Stephanie Prieto",
      code: "tef-prieto",
      group: false,
    },
    {
      name: "Diana Viera",
      code: "diana-viera",
      group: false,
    },
    {
      name: "Chloe Chang",
      code: "chloe-chang",
      group: false,
    },
    {
      name: "Daniel Guzmán",
      code: "daniel-guzman",
      group: false,
    },
    {
      name: "Biunis Becerra",
      code: "biunis-becerra",
      group: false,
    },
    {
      name: "Liliana Arizmendy",
      code: "liliana-arizmendy",
      group: false,
    },
    {
      name: "Rita Palacio y Familia",
      code: "rita-palacio-flia",
      group: true,
    },
    {
      name: "Yorladys Perez",
      code: "yorladys-perez",
      group: false,
    },
    {
      name: "Rosamor Ríos",
      code: "rosamor-rios",
      group: false,
    },
    {
      name: "Jennifer Arroyave",
      code: "jennifer-arroyave",
      group: false,
    },
    {
      name: "Jose H. Lopez",
      code: "jose-lopez",
      group: false,
    },
    {
      name: "Ezequiel Loza",
      code: "ezequiel-loza",
      group: false,
    },
    {
      name: "Rodrigo R. Serfas",
      code: "rodrigo-serfas",
      group: false,
    },
    {
      name: "Darío Muñoz",
      code: "dario-munoz",
      group: false,
    },
    {
      name: "Carlos y Carolina",
      code: "familia-losada",
      group: true,
    },
    {
      name: "Familia Martínez",
      code: "familia-martinez",
      group: true,
    },
    {
      name: "Valentina, Lucas y Vicenta",
      code: "valentina-lucas-vicenta",
      group: true,
    },
    {
      name: "Familia Greco",
      code: "familia-greco",
      group: true,
    },
    {
      name: "Pablo, Sonia, Malena y Mateo",
      code: "familia-torino",
      group: true,
    },
    {
      name: "Aureliano Palacios",
      code: "aureliano-palacios",
      group: false,
    },
    {
      name: "Ana, Olga y Ramón",
      code: "flia-ludueña",
      group: true,
    },
  ];

  useEffect(() => {
    if (invCode) {
      const getGuest = guestList.find((guest) => guest.code === invCode);

      if (!getGuest) {
        router.push("/");
      }

      setGuest(getGuest);
    }
  }, [invCode, router]);

  if (!invCode) {
    return null;
  }

  return (
    <main className="p-12 md:space-y-16 space-y-8 max-w-[720px] m-auto h-auto place-content-center">
      <div className="w-fit m-auto gap-y-6 text-[24px] md:text-[48px]">
        <p className="font-sans text-[18px] mb-2">{t("h1")}</p>
        <p>{guest?.name}</p>
      </div>
      <div className="italic font-sansLight text-center md:text-[20px] text-[16px]">
        {guest?.group ? t("h2") : t("h2_individual")}
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 text-[24px] md:text-[48px]">
        <p className="font-serif">Laura Medrano</p>
        <p className="mb-2 font-serif">&</p>
        <p className="font-serif">Ariel Moguillansky</p>
      </div>
      <div className="font-sans text-[18px] md:text-[24px] text-center space-y-4">
        <p> {t("h3")}</p>
        <p>15:00 Hs</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-[32px] text-[20px] mb-4">Palacio Sans Souci</p>
      </div>
      <div className="text-center">
        Esta es una invitación{" "}
        <span className="text-terra">
          {guest?.group ? "familiar" : "individual"}
        </span>{" "}
        para la participación <span className="text-terra">presencial</span> o{" "}
        <span className="text-terra">virtual</span> de la boda de Laura y Ariel.
      </div>
      <div className="m-auto font-sans text-center">{t("h7")}</div>
      <div className="m-auto font-medium text-center flex justify-center gap-x-4 items-center text-[20px]">
        <Link className="text-terra" href="https://www.laurayariel.site">
          www.laurayariel.site
        </Link>
        <Image
          className="animate-bounce-arrow-right"
          src="https://res.cloudinary.com/db03kvlju/image/upload/v1741903524/arrow_right_alt_24dp_C78665_FILL0_wght400_GRAD0_opsz24_rpewol.svg"
          width={22}
          height={22}
        />
      </div>
      <div className="text-center text-[24px]">
        {guest?.group ? t("h8") : t("h8_individual")}
      </div>
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
