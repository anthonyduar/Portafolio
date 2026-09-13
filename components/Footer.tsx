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
    <footer id='contacto' className='relative mt-3 w-full border-t border-white/10 text-[12px] text-gray-400'>
      <div
        className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.14] bg-[#0b0b0b] px-5 py-2 text-[12px] text-white/65 select-none'
      >
        Contacto
      </div>
      <div className='flex items-center justify-between gap-6 px-0 pb-1 pt-5'>
        <button type='button' onClick={copyEmail} className='transition-colors hover:text-white' title='Copiar correo'>
          {copied ? "¡Copiado!" : "anthonyraduarte@gmail.com"}
        </button>
        <a        
          href='https://linkedin.com/in/anthonyduar'
          className='absolute left-1/2 -translate-x-1/2 transition-colors hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://instagram.com/anthonyduar'
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
