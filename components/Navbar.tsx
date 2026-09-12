"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [locationTime, setLocationTime] = useState("Cargando...");

  useEffect(() => {
    let active = true;

    const updateLocationTime = async () => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      let country = "Local";

      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        country = data.country_name || country;
      } catch {
        country =
          Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone.split("/")[1]
            ?.replace("_", " ") || country;
      }

      if (active) setLocationTime(`${country} — ${time}`);
    };

    updateLocationTime();
    const interval = window.setInterval(updateLocationTime, 60_000);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <header className='mx-auto flex w-full max-w-6xl items-center justify-between text-xs text-white/45'>
      <div className='flex items-center gap-4'>
        <span className='flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-bold text-black shadow-[0_0_24px_rgba(255,255,255,0.08)]'>▲</span>
        <Link
          href='/'
          className='rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white'
        >
          Portafolio
        </Link>
      </div>
      <span className='rounded-full border border-white/[0.08] px-4 py-2 font-medium text-white/55'>{locationTime}</span>
    </header>
  );
}
