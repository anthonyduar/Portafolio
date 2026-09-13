"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
    <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-x-hidden bg-[#0b0b0b] px-4 py-2 text-white sm:px-6 md:px-12'>
      <Navbar />
      <main className='flex flex-1 flex-col items-center justify-start pt-6 pb-4 max-sm:landscape:flex-none max-sm:landscape:pt-2 max-sm:landscape:pb-4 md:pt-10 md:pb-5'>
        <div className='relative flex w-full max-w-5xl flex-col items-center'>
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
          <div className='mt-6 max-w-lg text-center text-[16px] leading-5 text-white/45 max-sm:landscape:mt-2 max-sm:landscape:text-[13px] max-sm:landscape:leading-4 md:mt-7'>
            <p>| Redactor SEO |</p>
            <p>| Editor de Video | Diseñador para Redes |</p>
            <p>| Desarrollo web |</p>
          </div>

          <div className='relative mt-6 grid w-full grid-cols-2 gap-3 px-2 max-sm:landscape:mt-3 max-sm:landscape:grid-cols-3 max-sm:landscape:gap-2 max-sm:landscape:px-0 sm:grid-cols-3 md:grid-cols-none md:absolute md:top-[180px] md:mt-0 md:h-[240px] md:max-w-4xl md:gap-0 md:px-0'>
            {categories.map(([label, href, image], index) => {
              const positions = [
                "md:left-0 md:-top-[10px]",
                "md:left-[12%] md:top-[62px]",
                "md:right-0 md:-top-[10px]",
                "md:right-[10%] md:top-[62px]",
                "md:left-[23%] md:bottom-0",
                "md:right-[22%] md:bottom-0",
              ];
              return (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => setTitle(label)}
                  onMouseLeave={() => setTitle("Anthony Duarte")}
                  className={`group relative flex h-[94px] w-full overflow-hidden rounded-xl border border-white/[0.11] bg-[#101010] p-3 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:border-white/30 max-sm:landscape:h-[68px] max-sm:landscape:rounded-lg max-sm:landscape:p-2 sm:h-[80px] md:absolute md:h-[106px] md:w-[230px] ${positions[index]}`}
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
    </div>
  );
}
