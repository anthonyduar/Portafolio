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
              <div className='relative mt-4 aspect-video overflow-hidden rounded-lg'>
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

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", closeWithEscape);
    return () => document.removeEventListener("keydown", closeWithEscape);
  }, []);

  return (
    <div className='flex min-h-screen max-w-[1440px] flex-col justify-between overflow-y-auto bg-[#0b0b0b] px-3 py-2 text-white md:px-6'>
      <Navbar />
      <main className='my-auto py-1'>
        <h1 className='text-center text-5xl font-medium leading-none tracking-[-0.08em] text-[#e8e7e2] sm:text-6xl md:text-7xl lg:text-7xl mb-6'>
          {title}
        </h1>
        <section className='mx-auto grid w-full max-w-4xl grid-cols-1 items-stretch gap-2 md:grid-cols-2'>
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
      <div className='flex justify-center py-4'>
        <Link
          href='/'
className='rounded-xl border border-white/[0.1] bg-white/[0.025] px-4 py-2 text-xs font-medium text-white/65 transition-colors hover:bg-white/[0.07] hover:text-white'        >
          <span className='mr-2' aria-hidden='true'>
            ←
          </span>
          Volver al inicio
        </Link>
      </div>
      <Footer />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
