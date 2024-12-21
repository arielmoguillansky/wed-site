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
    },
    {
      name: "Rene",
      code: "rene-jose",
    },
    {
      name: "Alfredo",
      code: "alfredo-gesell",
    },
    {
      name: "María Restrepo",
      code: "maria-restrepo",
    },
    {
      name: "Tatiana Mejía",
      code: "tatiana-mejia",
    },
    {
      name: "Carlos y Luz Ángela",
      code: "carlos-luz",
    },
    {
      name: "Esteban",
      code: "esteban-benalcazar",
    },
    {
      name: "Charles",
      code: "charles-munoz",
    },
    {
      name: "Alba y Familia",
      code: "alba-flia",
    },
    {
      name: "Marleni y Familia",
      code: "marleni-flia",
    },
    {
      name: "Nicole",
      code: "nicole",
    },
    {
      name: "Gregoria y Familia",
      code: "gregoria-flia",
    },
    {
      name: "Edilma y Corina Klinger",
      code: "edilma-klinger",
    },
    {
      name: "Ivan y Beauty Prieto",
      code: "ivan-beauty",
    },
    {
      name: "Rodryceth y Claudia",
      code: "rodryceth-claudia",
    },
    {
      name: "Sindy y Mario",
      code: "sindy-mario",
    },
    {
      name: "Polo Hernán y Familia",
      code: "polo-hernan-flia",
    },
    {
      name: "Marnin Medrano",
      code: "marnin-medrano",
    },
    {
      name: "Mayra Medrano",
      code: "mayra-medrano",
    },
    {
      name: "Matilde Mesa",
      code: "matilde-mesa",
    },
    {
      name: "Julio Edgar",
      code: "julio-edgar",
    },
    {
      name: "Carmen Eliza y Familia",
      code: "carmen-flia",
    },
    {
      name: "Floralba Ríos",
      code: "floralba-rios",
    },
    {
      name: "Ibeth Yesenia Ríos",
      code: "ibeth-yesenia",
    },
    {
      name: "Martha Rentería y Familia",
      code: "martha-renteria",
    },
    {
      name: "Luisa Marquinez",
      code: "luisa-marquinez",
    },
    {
      name: "Familia Medrano",
      code: "familia-medrano",
    },
    {
      name: "Kelly Polo",
      code: "kelly-polo",
    },
    {
      name: "Stephanie Prieto",
      code: "tef-prieto",
    },
    {
      name: "Diana Viera",
      code: "diana-viera",
    },
    {
      name: "Chloe Chang",
      code: "chloe-chang",
    },
    {
      name: "Daniel Guzmán",
      code: "daniel-guzman",
    },
    {
      name: "Biunis Becerra",
      code: "biunis-becerra",
    },
    {
      name: "Liliana Arizmendy",
      code: "liliana-arizmendy",
    },
    {
      name: "Rita Palacio y Familia",
      code: "rita-palacio-flia",
    },
    {
      name: "Yorladys Perez",
      code: "yorladys-perez",
    },
    {
      name: "Rosamor Ríos",
      code: "rosamor-rios",
    },
    {
      name: "Jennifer Arroyave",
      code: "jennifer-arroyave",
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
    <main className="p-12 md:space-y-16 space-y-8 max-w-[720px] m-auto">
      <div className="w-fit m-auto gap-y-6 text-[24px] md:text-[48px]">
        <p className="font-sans text-[18px] mb-2">{t("h1")}</p>
        <p>{guest?.name}</p>
      </div>
      <div className="font-sans text-center md:text-[24px] text-[18px]">
        {t("h2")}
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 text-[24px] md:text-[48px]">
        <p>Laura Medrano</p>
        <p className="mb-2 md:mb-12">&</p>
        <p>Ariel Moguillansky</p>
      </div>
      <div className="font-sans text-[18px] md:text-[24px] text-center space-y-4">
        <p> {t("h3")}</p>
        <p>15:00 Hs</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-[32px] text-[20px] mb-4">Palacio Sans Souci</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="flex flex-col items-center justify-center">
          <p className="font-sans">{t("h4")}</p>
          <p className="font-sans text-[18px] md:text-[24px]">
            Paz 750, Victoria
          </p>
          <p className="font-sans text-[18px] md:text-[24px]">Buenos Aires</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-sans">{t("h5")}</p>
          <div className="font-sans italic">{t("h6")}</div>
        </div>
      </div>
      <div className="m-auto font-sans text-center">{t("h7")}</div>
      <div className="m-auto font-medium text-center text-[18px]">
        <Link href="https://www.laurayariel.site">www.laurayariel.site</Link>
      </div>
      <div className="text-center text-[24px]">{t("h8")}</div>
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
