"use client";

import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("anthonyraduarte@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id='contacto' className='relative mt-2 sm:mt-10 w-full pt-4 max-sm:portrait:pt-6 border-t border-white/10 text-[12px] text-gray-400'>
      
      {/* EL ÚNICO CAMBIO: Badge de Contacto con estilo transparente y gris como la hora */}
      <div
        className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-1 max-sm:portrait:py-2 text-[12px] font-medium text-white/55 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md select-none'
      >
        Contacto
      </div>

      <div className='relative flex items-center justify-between gap-6 px-0 pb-1 pt-2 max-sm:portrait:pt-5'>
        {/* LinkedIn - Original */}
        <a         
          href='https://linkedin.com'
          className='transition-colors hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>

        {/* Correo Electrónico - Original */}
        <button 
          type='button' 
          onClick={copyEmail} 
          className='absolute left-1/2 -translate-x-1/2 transition-colors hover:text-white whitespace-nowrap' 
          title='Copiar correo'
        >
          {copied ? "¡Copiado!" : "anthonyraduarte@gmail.com"}
        </button>

        {/* Instagram - Original */}
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors hover:text-white'
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
