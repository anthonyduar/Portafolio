"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export type Project = {
  title: string;
  description: string;
  cover: string;
  detail?: string;
  video?: string;
  media?: { type: 'video' | 'image'; url: string }[];
  link?: string;
  repository?: string;
};

type PortfolioPageProps = {
  title: string;
  projects: Project[];
  cardHeight?: string;
};

function ProjectModal({
  project,
  close,
}: {
  project: Project;
  close: () => void;
}) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b0b]/80 p-4'
      role='dialog'
      aria-modal='true'
    >
      <div className='relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl'>
        <button
          type='button'
          onClick={close}
          className='sticky top-0 float-right z-10 rounded-full bg-neutral-800 px-3 py-1 text-lg text-white hover:bg-neutral-700'
          aria-label='Cerrar proyecto'
        >
          ✕
        </button>
        {project.repository && (
          <div className='mb-4 flex items-center justify-center gap-3'>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block rounded-xl border border-white/10 bg-[#0d1117] px-4 py-2 text-xs font-medium text-white transition-all hover:border-white/20 hover:bg-[#2f363d]'
              >
                Ver sitio en vivo 🌐
              </a>
            )}
            <a
              href={project.repository}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block rounded-xl border border-white/10 bg-[#0d1117] px-4 py-2 text-xs font-medium text-white transition-all hover:border-white/20 hover:bg-[#2f363d]'
            >
              Ver repositorio →
            </a>
          </div>
        )}
        {project.media ? (
          project.media.map((item, index) => (
            <div key={index} className='mt-4 first:mt-0'>
              {item.type === 'video' ? (
                <div className='relative aspect-video overflow-hidden rounded-lg bg-white p-2'>
                  <iframe
                    src={item.url}
                    className='absolute inset-0 h-full w-full'
                    allow='autoplay; fullscreen; picture-in-picture'
                    allowFullScreen
                    title={`${project.title} - video ${index + 1}`}
                  />
                </div>
              ) : (
                <img
                  src={item.url}
                  alt={`Detalle ${index + 1} de ${project.title}`}
                  className='h-auto w-full rounded-lg'
                />
              )}
            </div>
          ))
                                 ) : (
          <>
            {project.video && (
              <div 
                className={`relative mt-4 md:-mt-1 overflow-hidden rounded-lg transition-all w-full mx-auto ${
                  project.description.toLowerCase().includes("horizontal") || project.description.toLowerCase().includes("spot")
                    ? 'aspect-[16/10]' // 👈 SÓLO el horizontal se hace más alto en desktop
                    : 'aspect-[9/16] max-w-[85vw] md:max-w-[315px] -mt-4 md:mt-0'
                }`}
              >
                <iframe
                  src={project.video}
                  className='absolute inset-0 h-full w-full'
                  allow='autoplay; fullscreen; picture-in-picture'
                  allowFullScreen
                  title={project.title}
                />
              </div>
            )}


            {project.detail && (
              <img
                src={project.detail}
                alt={`Detalle de ${project.title}`}
                className='mt-4 h-auto w-full rounded-lg'
              />
            )}
          </>
        )}
        {project.link && !project.repository && (
          <div className='mt-6 text-center'>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block rounded-xl bg-white px-4 py-2 text-xs font-medium text-black hover:bg-gray-200'
            >
              Ver en la web →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioPage({
  title,
  projects,


  cardHeight = "h-[260px]",
}: PortfolioPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isWhatIDoOpen, setIsWhatIDoOpen] = useState(false);

  // CONTROL DE NAVEGACIÓN: Cierra con la tecla Escape O con el botón nativo de "Atrás" del móvil
  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setIsWhatIDoOpen(false);
      }
    };

    const handlePopState = () => {
      setSelectedProject(null);
      setIsWhatIDoOpen(false);
    };

    document.addEventListener("keydown", closeWithEscape);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("keydown", closeWithEscape);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // HISTORIAL VIRTUAL: Agrega un paso en el historial del navegador al abrir un modal
  useEffect(() => {
    if (selectedProject || isWhatIDoOpen) {
      window.history.pushState({ modalOpen: true }, "");
    }
  }, [selectedProject, isWhatIDoOpen]);

  // MANEJADORES DE CIERRE MANUAL (Limpian el historial virtual al usar las "✕")
  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  const handleCloseWhatIDo = () => {
    setIsWhatIDoOpen(false);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  return (
    <div className='flex min-h-screen max-w-[1440px] flex-col justify-between overflow-y-auto bg-[#0b0b0b] px-3 py-2 text-white md:px-6'>
      <Navbar />

      {/* 1. <main> regresa a su espaciado base limpio */}
      <main className='flex flex-1 flex-col items-center justify-start pt-10 pb-4 max-sm:landscape:flex-none max-sm:landscape:pt-10 max-sm:landscape:pb-4 md:pt-24 md:pb-5'>        
        {/* 2. Se añade max-sm:portrait:mt-8 aquí para separar el título de la barra sin empujar las tarjetas */}
        <div className='relative mx-auto mb-6 max-sm:portrait:mt-8 flex w-fit items-center justify-center'>
          <h1 className='text-center text-5xl font-medium leading-none tracking-[-0.08em] text-[#e8e7e2] sm:text-6xl md:text-7xl lg:text-7xl'>
            {title}
          </h1>
          
          {/* BOTÓN ¿QUÉ SÉ HACER? */}
                    <button
            type='button'
            onClick={() => setIsWhatIDoOpen(true)}
            className='absolute left-full z-40 ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/55 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md transition-all hover:bg-white/[0.07] hover:text-white cursor-pointer select-none hover:scale-105'
            aria-label='¿Qué sé hacer?'
          >
            {/* Icono de Información Circular y Estilizado */}
            <svg
              xmlns='http://w3.org'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-8 w-8'
            >
              <circle cx='12' cy='12' r='10' />
              <path strokeLinecap='round' d='M12 16v-4' />
              <path strokeLinecap='round' d='M12 8h.01' />
            </svg>
          </button>
        </div>


        <section className='mx-auto grid w-full max-w-4xl grid-cols-1 items-stretch gap-2 md:grid-cols-2 max-sm:portrait:-mt-3 lg:mt-1'>
          {projects.map((project, index) => (
            <button
              type='button'
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`relative flex ${cardHeight} cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#121212] p-6 text-left transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={project.cover}
                alt={`Portada ${project.title}`}
                className='absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90' />
              <div className='relative z-10 flex h-full flex-col justify-between'>
                <span className='text-xs text-gray-300'>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className='mb-1 text-xl font-medium text-white'>
                    {project.title}
                  </h2>
                  <p className='text-sm text-gray-200'>{project.description}</p>
                </div>
              </div>
            </button>
          ))}
        </section>
      </main>

      {/* BOTÓN VOLVER AL INICIO */}
      <div className='flex justify-center pb-8 sm:landscape:mt-8 md:mt-8 md:pb-0'>
  <Link
    href='/'
    className='flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] px-2 py-2 text-xs font-medium text-white/55 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md transition-all hover:bg-white/[0.07] hover:text-white select-none min-w-[100px]' 
  >
    {/* 📱 Flecha normal que se ve en el teléfono y se oculta en computadora */}
    <span className='md:hidden' aria-hidden='true'>
      ←
    </span>

    {/* 💻 Flecha larga que SOLO aparece a partir de pantallas desktop (md:) */}
    <span className='hidden md:inline text-sm' aria-hidden='true'>
      ⟵
    </span>
  </Link>
</div>



      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={handleCloseProject}
        />
      )}

      {isWhatIDoOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b0b]/80 p-4'
          role='dialog'
          aria-modal='true'
          aria-label='Qué sé hacer'
          onClick={handleCloseWhatIDo}
        >
          <div
            className='relative max-h-[90vh] w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl'
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type='button'
              onClick={handleCloseWhatIDo}
              className='absolute right-3 top-3 z-10 rounded-full bg-neutral-800 px-3 py-1 text-lg text-white hover:bg-neutral-700'
              aria-label='Cerrar modal'
            >
              ✕
            </button>
            <p className='text-sm text-gray-300'>Contenido del modal...</p>
          </div>
        </div>
      )}
    </div>
  );
}

