"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const categories = [
  ["Redacción", "/redaccion", "/img/redaccion.png"],
  ["Diseño", "/diseno", "/img/diseno.png"],
  ["Desarrollo Web", "/web", "/img/desarrollo.png"],
  ["Motion Graphics", "/motion", "/img/motion.png"],
  ["Marketing Digital", "/marketing", "/img/marketing.png"],
  ["Edición de Video", "/video", "/img/edicion.png"],
];

export default function HomePage() {
  const [title, setTitle] = useState("Anthony Duarte");
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // EFECTO AGREGADO: Escucha la tecla Escape para cerrar el modal "Sobre mí"
  useEffect(() => {
    if (!isAboutOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAboutOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Limpia el evento cuando el modal se cierra o se desmonta el componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAboutOpen]);

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-x-hidden bg-[#0b0b0b] px-4 py-2 text-white sm:px-6 md:px-12'>
      <Navbar hidePortfolio={false} />
      
      {/* CORRECCIÓN: Se cambió pt-16 por pt-28 para bajar todo el contenido en teléfonos verticales */}
      <main className='flex flex-1 flex-col items-center justify-start pt-28 pb-4 max-sm:landscape:flex-none max-sm:landscape:pt-10 max-sm:landscape:pb-4 md:pt-24 md:pb-5'>
        <div className='relative flex w-full max-w-5xl flex-col items-center'>
          <div className='relative mx-auto flex w-fit items-center justify-center'>
            <h1 className='text-center text-5xl font-medium leading-none tracking-[-0.08em] text-[#e8e7e2] sm:text-6xl md:text-7xl lg:text-7xl'>
              <AnimatePresence initial={false} mode='wait'>
                <motion.span
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className='inline-block'
                >
                  {title}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>
          <div className='mt-6 max-w-lg text-center text-[14px] leading-5 text-white/45 max-sm:landscape:mt-2 max-sm:landscape:text-[13px] max-sm:landscape:leading-4 md:mt-7'>
            <p>● Redactor SEO</p>
            <p>● Editor de Video ● Diseño</p>
            <p>● Desarrollo web</p>
          </div>

          {/* BOTÓN SOBRE MÍ */}
          <button
  type='button'
  onClick={() => setIsAboutOpen(true)}
  className='relative z-20 translate-y-4 max-sm:portrait:translate-y-6 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs font-medium text-white/55 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md transition-all hover:bg-white/[0.07] hover:text-white cursor-pointer select-none'
>
  <span>Sobre mí</span>
</button>

          {/* GRID DE CATEGORÍAS */}
<div className='relative mt-6 max-sm:portrait:mt-14 grid w-full grid-cols-2 gap-3 px-2 max-sm:landscape:mt-2 max-sm:landscape:grid-cols-3 max-sm:landscape:gap-2 max-sm:landscape:px-0 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-none lg:absolute lg:top-[140px] lg:mt-0 lg:h-[240px] lg:max-w-4xl lg:gap-0 lg:px-0'>            {categories.map(([label, href, image], index) => {
              const positions = [
                "lg:left-0 lg:-top-[10px]",
                "lg:left-[12%] lg:top-[62px]",
                "lg:right-0 lg:-top-[10px]",
                "lg:right-[10%] lg:top-[62px]",
                "lg:left-[23%] lg:bottom-0",
                "lg:right-[22%] lg:bottom-0",
              ];
              return (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => setTitle(label)}
                  onMouseLeave={() => setTitle("Anthony Duarte")}
                  className={`group relative flex h-[94px] w-full overflow-hidden rounded-xl border border-white/[0.11] bg-[#101010] p-3 transition-all duration-500 shadow-[0_12px_30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] hover:z-10 hover:-translate-y-1 hover:border-white/30 max-sm:landscape:h-[60px] max-sm:landscape:rounded-lg max-sm:landscape:p-2 sm:h-[80px] lg:absolute lg:h-[106px] lg:w-[230px] ${positions[index]}`}
                >
                  <img
                    src={image}
                    alt={`Portada ${label}`}
                    className='absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/85' />
                  <span className='relative z-10 text-[8px] tracking-[0.18em] text-white/40'>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className='relative z-10 m-auto text-center text-xs font-medium text-white sm:text-sm'>
                    {label}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />

      {/* MODAL SOBRE MÍ */}
      {isAboutOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b0b]/80 p-4 animate-in fade-in duration-200'
          role='dialog'
          aria-modal='true'
          aria-labelledby='about-title'
          onClick={() => setIsAboutOpen(false)}
        >
          <div
            className='relative max-h-[90vh] w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl animate-in zoom-in-95 duration-200'
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type='button'
              onClick={() => setIsAboutOpen(false)}
              className='absolute right-3 top-3 z-10 rounded-full bg-neutral-800 px-3 py-1 text-lg text-white hover:bg-neutral-700 cursor-pointer'
              aria-label='Cerrar sobre mí'
            >
              ×
            </button>
            <img
              src='/img/foto.png'
              alt='Anthony Duarte'
              className='h-auto max-h-[80vh] w-full rounded-lg object-contain'
            />
          </div>
        </div>
      )}
    </div>
  );
}
