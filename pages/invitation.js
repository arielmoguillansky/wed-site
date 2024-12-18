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
    <main className="p-12 space-y-8 bg-[#FFFDD0] text-[#4B3D26]">
      <div className="w-fit m-auto gap-y-6 text-[24px] md:text-[48px]">
        <p className="font-sans text-[18px] mb-2">Para</p>
        <p>{guest?.name}</p>
      </div>
      <div className="font-sans text-center">
        En el día que cambia nuestra vida para siempre, queremos que estés con
        nosotros y nos acompañes a celebrar nuestro amor y nuestra unión.
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 text-[24px] md:text-[48px]">
        <p>Laura Medrano</p>
        <p className="mb-2">y</p>
        <p>Ariel Moguillansky</p>
      </div>
      <div className="flex justify-center font-sans text-[24px]">
        Sábado 17 de mayo del 2025
      </div>
      <div className="flex justify-center font-sans text-[24px]">15:00 Hs</div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[24px] mb-4">Palacio Sans Souci</p>
        <p className="font-sans">Paz 750, Victoria</p>
        <p className="font-sans">Buenos Aires</p>
      </div>
      <div className="m-auto font-sans text-center">
        Mas información próximamente en nuestro sitio web.
      </div>
      <div className="m-auto font-medium text-center">
        <Link href="https://www.laurayariel.site">www.laurayariel.site</Link>
      </div>
      <div className="text-center">¡Te esperamos!</div>
    </main>
  );
}
