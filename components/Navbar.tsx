"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const mainLinks = [
  ["Redacción", "/redaccion"],
  ["Marketing Digital", "/marketing"],
  ["Edición de Video", "/video"],
];

const dropdownLinks = [
  ["Diseño", "/diseno"],
  ["Motion Graphics", "/motion"],
  ["Desarrollo Web", "/web"],
];

export default function Navbar() {
  const [locationTime, setLocationTime] = useState("Cargando...");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <header className='mx-auto flex w-full max-w-6xl items-center justify-between gap-3 text-[9px] text-white/45 sm:gap-5'>
      <div className='flex shrink-0 items-center gap-3'>
        <Link
          href='/'
          aria-label='Ir al inicio'
          className='flex size-7 items-center justify-center rounded-xl border border-white/10 bg-white text-xs font-bold text-black shadow-[0_0_24px_rgba(255,255,255,0.08)] sm:hidden'
        >
          ▲
        </Link>
        <Link
          href='/'
          className='hidden rounded-full border border-white/[0.1] px-4 py-2 text-[12px] font-medium text-white/65 transition-colors hover:bg-white/[0.07] hover:text-white sm:block'
        >
          Portafolio
        </Link>
      </div>
      <nav
        className='min-w-0 flex-1 relative'
        aria-label='Navegación principal'
      >
        {/* Tu contenedor original se mantiene intacto con su overflow-x-auto */}
        <div className='mx-auto flex w-fit max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-white/[0.1] bg-white/[0.025] px-2 py-1.5 md:px-3 md:py-2'>
          {/* 1. Enlaces Principales */}
          {mainLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className='whitespace-nowrap rounded-full px-1.5 py-2 text-[11px] md:text-[12px] font-medium transition-colors hover:bg-white/[0.07] hover:text-white md:px-3.5'
            >
              {label}
            </Link>
          ))}

          <button
            type='button'
            onClick={() => setIsDropdownOpen((isOpen) => !isOpen)}
            aria-label='Abrir secciones'
            aria-expanded={isDropdownOpen}
            aria-controls='menu-secciones'
            className={`flex items-center justify-center px-2 py-2 text-[11px] font-bold text-white/45 transition-transform duration-300 md:hidden ${isDropdownOpen ? "rotate-180" : ""}`}
          >
            ▼
          </button>

          {/* 2. Enlaces Secundarios para Escritorio */}
          <div className='hidden md:flex items-center gap-0.5'>
            {dropdownLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className='whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-medium transition-colors hover:bg-white/[0.07] hover:text-white md:px-3.5'
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* 💡 EL TRUCO: El submenú ahora se renderiza AQUÍ AFUERA. 
            Está libre del overflow-x-auto y centrado de forma simétrica justo abajo de la barra */}
        {isDropdownOpen && (
          <div
            id='menu-secciones'
            className='absolute top-12 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-1 min-w-[145px] rounded-xl border border-white/10 bg-[#0b0b0b]/95 p-2 shadow-2xl backdrop-blur-md pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-150'
          >
            {dropdownLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsDropdownOpen(false)} // Cierra el menú al hacer clic
                className='whitespace-nowrap rounded-lg px-3 py-2 text-[12px] font-medium text-white/65 transition-colors hover:bg-white/[0.07] hover:text-white text-center'
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <div className='hidden shrink-0 rounded-full border border-white/[0.1] px-3 py-2 text-[12px] font-medium text-white/55 sm:block select-none'>
        {locationTime}
      </div>
    </header>
  );
}
