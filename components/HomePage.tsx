"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const categories = [
  ["Redacción", "/redaccion", "/img/redaccion.png"],
  ["Marketing Digital", "/marketing", "/img/marketing.png"],
  ["Edición de Video", "/video", "/img/edicion.png"],
  ["Diseño", "/diseno", "/img/diseno.png"],
  ["Motion Graphics", "/motion", "/img/motion.png"],
  ["Desarrollo Web", "/web", "/img/desarrollo.png"],
];

export default function HomePage() {
  const [title, setTitle] = useState("Anthony Duarte");

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden bg-[#0b0b0b] px-4 py-5 text-white md:px-12 md:py-7'>
      <Navbar />
      <main className='flex flex-1 flex-col justify-center py-12 md:py-16'>
        <div className='relative mx-auto flex w-full max-w-6xl flex-col items-center'>
          <section className='pointer-events-none absolute inset-0 hidden md:block' aria-hidden='true'>
            <span className='absolute left-0 top-[12%] h-px w-24 bg-white/10' />
            <span className='absolute right-0 top-[12%] h-px w-24 bg-white/10' />
            <span className='absolute bottom-[12%] left-8 h-px w-24 bg-white/10' />
            <span className='absolute bottom-[12%] right-8 h-px w-24 bg-white/10' />
          </section>

          <h1 className='relative z-10 mx-auto max-w-4xl text-center text-6xl font-medium leading-[0.95] tracking-[-0.07em] text-[#e8e7e2] sm:text-7xl md:text-8xl'>
            {title}
          </h1>
          <p className='relative z-10 mt-5 max-w-md text-center text-sm leading-6 text-white/45 md:mt-6'>
            Creo experiencias digitales con ideas claras, historias que conectan y tecnología que funciona.
          </p>

          <div className='relative mt-10 flex w-full items-center justify-center md:mt-12'>
            <div className='grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5'>
              {categories.map(([label, href, image], index) => (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => setTitle(label)}
                  onMouseLeave={() => setTitle("Anthony Duarte")}
                  className={`group relative flex h-36 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101010] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 md:h-44 md:p-5 ${index % 3 === 1 ? "md:translate-y-8" : ""}`}
                >
                  <img src={image} alt={`Portada ${label}`} className='absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0' />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/15 via-black/55 to-black/90' />
                  <span className='relative z-10 text-[10px] tracking-[0.18em] text-white/45'>{String(index + 1).padStart(2, "0")}</span>
                  <h2 className='relative z-10 m-auto text-center text-base font-medium text-white md:text-lg'>{label}</h2>
                </Link>
              ))}
            </div>
          </div>

          <div className='relative z-10 mt-16 flex flex-col items-center gap-3 text-center md:mt-20'>
            <span className='text-[10px] uppercase tracking-[0.24em] text-white/35'>Sobre mí</span>
            <p className='max-w-xl text-sm leading-6 text-white/65'>Soy Anthony, un creativo multidisciplinario que combina estrategia, diseño y desarrollo para convertir conceptos en proyectos memorables.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
