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
    <footer className='flex w-full items-center justify-between border-t border-white/10 py-5 text-sm text-gray-400'>
      <button
        type='button'
        onClick={copyEmail}
        className='transition-colors hover:text-white'
        title='Copiar correo'
      >
        {copied ? "¡Copiado!" : "anthonyraduarte@gmail.com"}
      </button>
      <div className='flex gap-6'>
        <a
          href='https://linkedin.com/in/anthonyduar'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors hover:text-white'
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
