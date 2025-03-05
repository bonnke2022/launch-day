"use client";

import { useEffect, useState } from "react";

const launch_date = new Date(Date.UTC(2025, 2, 27, 0, 0, 0)).getTime();

// const targetDate = new Date();
// targetDate.setDate(targetDate.getDate() + 24);

export const getTimeLeft = () => {
  const now = new Date().getTime();
  const difference = launch_date - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};
console.log(new Date().toISOString());

const Countdown = () => {
  const [timerLeft, setTimerLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setTimerLeft(getTimeLeft()); // ✅ Set initial state on the client
    const interval = setInterval(() => {
      setTimerLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timerLeft) return <p>Loading countdown...</p>;
  return (
    <div className="flex gap-2 md:gap-4 lg:gap-6">
      {Object.entries(timerLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center gap-4">
          <h1 className="lg:text-5xl text-3xl font-bold">
            {String(value).padStart(2, "0")}
          </h1>
          <p className="uppercase text-white bg-purple-900 py-2 px-4 md:px-4 lg:px-6 text-sm rounded-md">
            {key}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
