"use client";

import Link from "next/link";
import { useState } from "react";
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

 return (
  <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden bg-[#0b0b0b] px-4 py-2 text-white sm:px-6 md:px-12'>
    <Navbar />
    <main className='flex flex-1 flex-col items-center justify-start pt-6 pb-4 md:pt-10 md:pb-5'>
      <div className='relative flex w-full max-w-5xl flex-col items-center'>
        <h1 className='text-center text-5xl font-medium leading-none tracking-[-0.08em] text-[#e8e7e2] sm:text-6xl md:text-7xl lg:text-7xl'>
          {title}
        </h1>
        <div className='mt-6 max-w-lg text-center text-[16px] leading-5 text-white/45 md:mt-7'>
          <p>Creador de contenido digital. Especializado en redacción SEO,</p>
          <p>gestión editorial, edición audiovisual</p> 
          <p>y desarrollo web.</p>
        </div>

        <div className='absolute top-[180px] h-[240px] w-full max-w-4xl'>
          {categories.map(([label, href, image], index) => {
            const positions = [
              'left-0 -top-[10px] sm:left-0 md:left-0',
              'left-[8%] top-[62px] sm:left-[10%] md:left-[12%]',
              'right-0 -top-[10px] sm:right-0 md:right-0',
              'right-[6%] top-[62px] sm:right-[8%] md:right-[10%]',
              'left-[20%] bottom-0 sm:left-[22%] md:left-[23%]',
              'right-[20%] bottom-0 sm:right-[21%] md:right-[22%]',
            ];
            return (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => setTitle(label)}
                  onMouseLeave={() => setTitle("Anthony Duarte")}
                  className={`group absolute flex h-[94px] w-[200px] overflow-hidden rounded-xl border border-white/[0.11] bg-[#101010] p-3 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:border-white/30 sm:h-[104px] sm:w-[220px] md:h-[106px] md:w-[230px] ${positions[index]}`}
                >
                  <img src={image} alt={`Portada ${label}`} className='absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0' />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/85' />
                  <span className='relative z-10 text-[8px] tracking-[0.18em] text-white/40'>{String(index + 1).padStart(2, "0")}</span>
                  <h2 className='relative z-10 m-auto text-center text-xs font-medium text-white sm:text-sm'>{label}</h2>
                </Link>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
