"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const portfolioLinks = [
  ["Redacción", "/redaccion"],
  ["Marketing Digital", "/marketing"],
  ["Edición de Video", "/video"],
  ["Motion Graphics", "/motion"],
  ["Desarrollo Web", "/web"],
];

export default function Navbar() {
  const [locationTime, setLocationTime] = useState("Cargando...");

  useEffect(() => {
    let active = true;
    const updateLocationTime = async () => {
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      let country = "Local";
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        country = data.country_name || country;
      } catch {
        country = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1]?.replace("_", " ") || country;
      }
      if (active) setLocationTime(`${country} — ${time}`);
    };
    updateLocationTime();
    const interval = window.setInterval(updateLocationTime, 60_000);
    return () => { active = false; window.clearInterval(interval); };
  }, []);

  return (
    <header className='mx-auto flex w-full max-w-6xl items-center justify-between gap-5 text-xs text-white/45'>
      <Link href='/' aria-label='Inicio' className='flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-bold text-black shadow-[0_0_24px_rgba(255,255,255,0.08)]'>✦</Link>
      <nav className='hidden min-w-0 flex-1 items-center justify-center md:flex' aria-label='Navegación principal'>
        <div className='flex max-w-4xl items-center gap-1 overflow-x-auto rounded-full border border-white/[0.1] bg-white/[0.025] px-3 py-2'>
          {portfolioLinks.map(([label, href]) => <Link key={href} href={href} className='whitespace-nowrap rounded-full px-3 py-2 font-medium transition-colors hover:bg-white/[0.07] hover:text-white'>{label}</Link>)}
          <Link href='#contacto' className='whitespace-nowrap rounded-full px-3 py-2 font-medium text-white/70 transition-colors hover:bg-white/[0.07] hover:text-white'>Contacto</Link>
        </div>
      </nav>
      <span className='hidden shrink-0 rounded-full border border-white/[0.08] px-4 py-2 font-medium text-white/55 lg:block'>{locationTime}</span>
      <Link href='#contacto' className='shrink-0 rounded-full border border-white/[0.1] px-4 py-2 font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden'>Contacto</Link>
    </header>
  );
}
