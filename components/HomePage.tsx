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
    <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between overflow-hidden bg-[#0b0b0b] px-4 py-4 text-white md:px-12 md:py-6'>
      <Navbar />
      <main className='my-auto py-16 md:py-24'>
        <h1 className='mx-auto mb-8 max-w-4xl text-center text-6xl font-medium leading-[0.98] tracking-[-0.06em] text-[#e8e7e2] sm:text-7xl md:text-8xl'>
          {title}
        </h1>
        <section className='mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_1.4fr_1fr]'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex h-[190px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-5'>
              <img
                src='/img/foto.png'
                alt='Anthony Duarte'
                className='h-20 w-20 rounded-full object-cover opacity-70'
              />
            </div>
            <div className='relative flex h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-5'>
              <span className='relative z-10 text-xs text-gray-500'>
                Sobre Mí
              </span>
              <p className='absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-white/80'>
                Aquí colocas el texto que deseas mostrar centrado dentro de la
                tarjeta.
              </p>
            </div>
          </div>
          <div className='rounded-2xl border border-white/[0.08] bg-[#101010] p-5 md:min-h-[356px]'>
            <span className='text-xs text-gray-500'>Portafolios</span>
            <div className='my-2 grid grid-cols-2 gap-3 sm:grid-cols-3'>
              {categories.map(([label, href, image]) => (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => setTitle(label)}
                  onMouseLeave={() => setTitle("Anthony Duarte")}
                  className='group relative flex h-[130px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-6 transition-all duration-300 hover:scale-[1.02] hover:border-white/20'
                >
                  <img
                    src={image}
                    alt={`Portada ${label}`}
                    className='absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-90'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90' />
                  <h2 className='relative z-10 m-auto text-center text-lg font-medium'>
                    {label}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex h-[190px] items-center justify-center rounded-2xl border border-white/[0.08] bg-[#101010] p-4'>
              <div className='flex flex-wrap items-center justify-center gap-3'>
                {[
                  ["figma.svg", "Figma"],
                  ["capcut.svg", "CapCut"],
                  ["affinity.svg", "Affinity"],
                  ["vscode.svg", "VS Code"],
                ].map(([image, label]) => (
                  <div
                    key={label}
                    className='flex h-10 w-10 items-center justify-center'
                    title={label}
                  >
                    <img
                      src={`/img/${image}`}
                      alt={label}
                      className='h-full w-full object-contain'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex h-[190px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#101010] p-5'>
              <span className='text-xs text-gray-500'>Contacto</span>
              <div className='flex items-center justify-center gap-6'>
                <a
                  href='mailto:anthonyraduarte@gmail.com'
                  className='text-gray-400 hover:text-white'
                  title='Enviar correo'
                >
                  ✉
                </a>
                <a
                  href='https://www.linkedin.com/in/anthonyduar/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-[#0A66C2]'
                  title='LinkedIn'
                >
                  in
                </a>
                <a
                  href='https://instagram.com/anthonyduar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-[#E4405F]'
                  title='Instagram'
                >
                  ◎
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
