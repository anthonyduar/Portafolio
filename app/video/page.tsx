import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Edición y Montaje",
    description: "Anuncio Vertical para Redes.",
    cover: "/img/portada-video1.png",
    detail: "/img/portafolios/video1.png",
    video: "https://player.vimeo.com/video/1219104502",
  },
  {
    title: "Edición y Montaje",
    description: "Spot Comercial Horizontal.",
    cover: "/img/portada-video2.png",
    detail: "/img/portafolios/video2.png",
    video: "https://player.vimeo.com/video/1216445330",
  },
  {
    title: "Edición y Montaje",
    description: "Cápsula Deportiva.",
    cover: "/img/portada-video3.png",
    detail: "/img/portafolios/video3.png",
    video: "https://player.vimeo.com/video/1221664277",
  },
  {
    title: "Edición Publicitaria",
    description: "Spots comerciales para marcas.",
    cover: "/img/portada-video1.png",
    detail: "/img/portafolios/video3.png",
  },
];

export default function Page() {
  return (
    <PortfolioPage
      title='Edición de Video'
      projects={projects}
      cardHeight='h-[130px]'
    />
  );
}
