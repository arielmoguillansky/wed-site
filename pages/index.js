import Image from "next/image";
import { useTranslations } from "use-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="relative flex items-center justify-center w-screen h-screen pb-12">
      <Image
        src={"/images/under-construction.jpeg"}
        alt="Construction image"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="z-10 flex justify-center w-full py-2 bg-white">
        <span className="text-[24px] md:text-[48px] z-10 uppercase">
          {t("underConstruction")}
        </span>
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
