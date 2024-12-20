import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const targetDate = "2025-02-15T23:59:59";
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <main className="relative flex items-center justify-center w-screen h-screen pb-12">
      <div className="z-10 w-full py-2">
        <p className="text-[24px] md:text-[48px] z-10 text-center mb-8">
          {t("h1")}
        </p>
        <p className="text-[24px] md:text-[32px] z-10 text-center font-sans">
          {t("h2")}
        </p>
        <div className="flex justify-center mx-auto w-fit gap-x-4 mb-14">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <p className="text-[42px]">{formatTime(timeLeft.days)}</p>
            <p className="text-[16px] font-sans uppercase">{t("days")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <p className="text-[42px]">{formatTime(timeLeft.hours)}</p>
            <p className="text-[16px] font-sans uppercase">{t("hours")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <p className="text-[42px]">{formatTime(timeLeft.minutes)}</p>
            <p className="text-[16px] font-sans uppercase">{t("minutes")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <p className="text-[42px]">{formatTime(timeLeft.seconds)}</p>
            <p className="text-[16px] font-sans uppercase">{t("seconds")}</p>
          </div>
        </div>
        <div className="text-[32px] m-auto w-fit">Laura y Ariel</div>
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
