import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Invitation() {
  const router = useRouter();
  const { code: invCode } = router.query;
  const [guest, setGuest] = useState(null);
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
        <p className="font-sans text-[18px] mb-2">Para</p>
        <p>{guest?.name}</p>
      </div>
      <div className="font-sans text-center md:text-[24px] text-[18px]">
        En el día que cambia nuestra vida para siempre, queremos que estés con
        nosotros y nos acompañes a celebrar nuestro amor y nuestra unión.
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 text-[24px] md:text-[48px]">
        <p>Laura Medrano</p>
        <p className="mb-2 md:mb-12">y</p>
        <p>Ariel Moguillansky</p>
      </div>
      <div className="font-sans text-[18px] md:text-[24px] text-center space-y-4">
        <p>Sábado 17 de mayo del 2025</p>
        <p>15:00 Hs</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-[32px] text-[20px] mb-4">Palacio Sans Souci</p>
        <p className="font-sans text-[18px] md:text-[24px]">
          Paz 750, Victoria
        </p>
        <p className="font-sans text-[18px] md:text-[24px]">Buenos Aires</p>
      </div>
      <div className="m-auto font-sans text-center">
        Mas información próximamente en nuestro sitio web.
      </div>
      <div className="m-auto font-medium text-center text-[18px]">
        <Link href="https://www.laurayariel.site">www.laurayariel.site</Link>
      </div>
      <div className="text-center text-[24px]">¡Te esperamos!</div>
    </main>
  );
}
