import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Estrategia de Contenido",
    description: "Copywriting, diseño y video para eCommerce.",
    cover: "/img/portada-marketing-eparadise.png",
    media: [
      { type: "image", url: "/img/portafolios/marketing-eparadise.png" }, // 👈 Cambia esto por la ruta de tu primer PNG
      { type: "video", url: "https://player.vimeo.com/video/1219104502" },
      { type: "image", url: "/img/portafolios/marketing-eparadise2.png" }, // Este es tu PNG actual
    ],
  },
  {
    title: "Gestión de Contenido",
    description: "Copy, creación de contenido y tráfico Web.",
    cover: "/img/portada-branding-actualnow.png",
    media: [
      { type: "image", url: "/img/portafolios/marketing-actualnow.png" },
      { type: "video", url: "https://player.vimeo.com/video/1221664277"},
      { type: "image", url: "/img/portafolios/marketing-actualnow2.png" },
    ],
  },
];

export default function Page() {
  return <PortfolioPage title='Marketing Digital' projects={projects} />;
}