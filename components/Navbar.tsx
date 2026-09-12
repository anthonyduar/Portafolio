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
    <header className='flex w-full items-center justify-between text-sm text-gray-400'>
      <div className='flex items-center'>
        <span className='font-bold text-white'>▲</span>
        <Link
          href='/'
          className='ml-12 font-medium text-white transition-colors hover:text-gray-300'
        >
          Portafolio
        </Link>
      </div>
      <span className='font-medium text-white'>{locationTime}</span>
    </header>
  );
}
