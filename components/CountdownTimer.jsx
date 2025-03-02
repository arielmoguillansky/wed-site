import { isDateInPast } from "@/helpers/helpers";
import React, { useEffect, useState } from "react";

const deadline = new Date("2025-05-17T14:30:00");

const INITIAL_TIME_LEFT = { months: 0, days: 0, hrs: 0, mins: 0, secs: 0 };

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME_LEFT);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let timeLeft = {};
    const currentDate = new Date();
    let difference = deadline.getTime() - currentDate.getTime();

    if (difference > 0) {
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      difference -= months * (1000 * 60 * 60 * 24 * 30);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((difference / 1000 / 60) % 60);
      const secs = Math.floor((difference / 1000) % 60);

      timeLeft = { months, days, hrs, mins, secs };
    }

    return timeLeft;
  }

  return isDateInPast(deadline) ? null : (
    <div>
      <div className="flex justify-center gap-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            className="shadow-[0_1px_10px_0px_rgba(211,222,227,0.7)] xl:w-[240px] xl:h-[240px] w-[180px] h-[180px] flex flex-col pt-2 items-center gap-y-4"
            key={unit}
          >
            <div className="flex text-[48px] lg:text-[72px] xl:text-[100px] text-pearl leading-normal">
              <p className="font-serif">{Math.floor(value / 10)}</p>
              <p className="font-serif">{value % 10}</p>
            </div>
            <p className="lg:text-[12px] uppercase font-sansMed">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountdownTimer;
