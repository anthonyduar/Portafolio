"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const categories = [
  ["Redacción", "/redaccion", "/img/redaccion.png"],
  ["Marketing Digital", "/marketing", "/img/marketing.png"],
  ["Edición de Video", "/video", "/img/edicion.png"],
  ["Motion Graphics", "/motion", "/img/motion.png"],
  ["Diseño", "/diseno", "/img/diseno.png"],
  ["Desarrollo Web", "/web", "/img/desarrollo.png"],
];

export default function HomePage() {
  const [title, setTitle] = useState("Anthony Duarte");

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden bg-[#0b0b0b] px-4 py-2 text-white sm:px-6 md:px-12'>
      <Navbar />
      <main className='flex flex-1 flex-col items-center justify-center py-4 md:py-5'>
        <div className='flex w-full max-w-5xl flex-col items-center'>
          <h1 className='text-center text-5xl font-medium leading-none tracking-[-0.08em] text-[#e8e7e2] sm:text-6xl md:text-7xl lg:text-7xl'>
            {title}
          </h1>
          <div className='mt-5 max-w-md text-center text-[11px] leading-5 text-white/45 md:mt-6'>
            <p>Creo experiencias digitales con ideas claras, historias que conectan y</p>
            <p>tecnología que funciona.</p>
          </div>

          <div className='relative mt-4 h-[205px] w-full max-w-3xl sm:h-[220px] md:mt-7 md:h-[235px]'>
            {categories.map(([label, href, image], index) => {
              const positions = [
                'left-0 top-0 sm:left-2 md:left-0',
                'left-[12%] top-[88px] sm:left-[14%] md:left-[13%]',
                'right-0 top-0 sm:right-2 md:right-0',
                'right-[10%] top-[88px] sm:right-[12%] md:right-[10%]',
                'left-[22%] bottom-0 sm:left-[24%] md:left-[22%]',
                'right-[24%] bottom-0 sm:right-[25%] md:right-[24%]',
              ];
              return (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => setTitle(label)}
                  onMouseLeave={() => setTitle("Anthony Duarte")}
                  className={`group absolute flex h-[88px] w-[190px] overflow-hidden rounded-xl border border-white/[0.11] bg-[#101010] p-3 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:border-white/30 sm:h-[98px] sm:w-[220px] md:h-[104px] md:w-[250px] ${positions[index]}`}
                >
                  <img src={image} alt={`Portada ${label}`} className='absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0' />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/85' />
                  <span className='relative z-10 text-[8px] tracking-[0.18em] text-white/40'>{String(index + 1).padStart(2, "0")}</span>
                  <h2 className='relative z-10 m-auto text-center text-xs font-medium text-white sm:text-sm'>{label}</h2>
                </Link>
              );
            })}
          </div>

          <Link href='#contacto' className='mt-8 rounded-full border border-white/[0.14] px-5 py-2 text-[10px] text-white/65 transition-colors hover:border-white/35 hover:text-white'>
            Contacto
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
