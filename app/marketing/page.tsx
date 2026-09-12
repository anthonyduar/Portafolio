import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Estrategia de Contenido",
    description: "Copywriting, diseño y video para eCommerce.",
    cover: "/img/portada-marketing-eparadise.png",
    detail: "/img/portafolios/marketing-eparadise.png",
    video: "https://player.vimeo.com/video/1219104502",
  },
  {
    title: "Gestión de Contenido",
    description: "Copy, creación de contenido y tráfico Web.",
    cover: "/img/portada-branding-actualnow.png",
    detail: "/img/portafolios/marketing-actualnow.png",
    video: "https://player.vimeo.com/video/1221664277",
  },
];

export default function Page() {
  return <PortfolioPage title='Marketing Digital' projects={projects} />;
}
