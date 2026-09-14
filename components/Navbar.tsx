"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const portfolioLinks = [
  ["Redacción", "/redaccion"],
  ["Diseño", "/diseno"],
  ["Desarrollo Web", "/web"],
  ["Motion Graphics", "/motion"],
  ["Marketing Digital", "/marketing"],
  ["Edición de Video", "/video"],
];

export default function Navbar({ hidePortfolio = false }: { hidePortfolio?: boolean }) {
  const [locationTime, setLocationTime] = useState("Cargando...");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Referencia para detectar clics externos en el navbar
  const navbarRef = useRef<HTMLDivElement>(null);

  // 1. Efecto para manejar la ubicación y la hora local
  useEffect(() => {
    let active = true;
    const updateLocationTime = async () => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      let country = "Local";
      try {
        // CORRECCIÓN DEFINITIVA: Formato JSON para evitar fallos de lectura
        const response = await fetch("https://ipapi.co");
        const data = await response.json();
        country = data.country_name || country;
      } catch {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz) {
          const parts = tz.split("/");
          country = parts[parts.length - 1]?.replace("_", " ") || "Local";
        }
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

  // 2. Efecto para cerrar con Clic Afuera y tecla Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* UBICACIÓN Y HORA: Fuera del navbar, arriba a la derecha */}
      <div className='absolute top-4 right-6 z-40 hidden rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/55 backdrop-blur-md sm:block select-none'>
        {locationTime}
      </div>

      {/* NAVBAR PRINCIPAL: Más corto, compacto y centrado */}
      <header className='fixed top-4 left-1/2 z-50 w-full max-w-xs -translate-x-1/2 px-4'>
        <div 
          ref={navbarRef}
          className='relative w-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md transition-all duration-300'
        >
          
          <div className='flex items-center justify-between px-2'>
            {/* LADO IZQUIERDO: Palabra cliqueable con color corregido a gris como la hora */}
            <Link 
              href='/' 
              onClick={() => setIsMenuOpen(false)}
              className='text-sm font-semibold tracking-wide text-white/55 transition-colors hover:text-white duration-200 select-none'
            >
              Portafolio
            </Link>

            {/* LADO DERECHO: 3 Rayas minimalistas */}
            <button
              type='button'
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label='Abrir menú de navigation'
              aria-expanded={isMenuOpen}
              className='flex h-6 w-6 cursor-pointer flex-col justify-center gap-1.5 p-1'
            >
              <span className={`h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
          </div>

          {/* MENÚ DESPLEGABLE CON LOS LINKS INTERNOS */}
          {isMenuOpen && (
            <nav 
              className='mt-3 flex flex-col gap-1 border-t border-white/[0.05] pt-3 animate-in fade-in slide-in-from-top-2 duration-200'
              aria-label='Enlaces de portafolio'
            >
              {portfolioLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className='rounded-xl px-4 py-2 text-xs font-medium text-white/60 transition-all hover:bg-white/[0.05] hover:text-white text-center'
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
