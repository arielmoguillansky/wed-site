import { Rsvp } from "@/components/Rsvp";
import { useTranslations } from "use-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="relative flex items-center justify-center w-screen h-screen pb-12">
      <section className="flex items-center justify-center w-full h-screen gap-x-4">
        <span className="text-[72px]">Laura</span>
        <span className="text-[72px]">Ariel</span>
        [foto portada]
      </section>
      <section className="text-center">
        <h2 className="uppercase max-w-[1024px] text-[60px] m-auto mb-4">
          El momento llegó, nos estamos casando!
        </h2>
        <p className="max-w-[1024px] m-auto text-[24px] mb-6">
          A 10 años de habernos visto por primera vez, despues de tantas
          comidas, salidas, juegos y aventuras, decidimos finalmente compartir
          una vida juntos y es nuestro deseo compartir este momento con vos!
        </p>
        <a href="#rsvp" className="bg-[#0d0804] p-4 text-[#fefae0] uppercase">
          Vení a celebrar!
        </a>
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
