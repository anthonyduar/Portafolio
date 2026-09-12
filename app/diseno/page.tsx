import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Diseño de Branding",
    description: "Creación de identidad de marca.",
    cover: "/img/portada-branding-actualnow.png",
    detail: "/img/portafolios/branding-actualnow.png",
  },
  {
    title: "Multimedia y Web",
    description: "Edición de video y diseño de interfaces.",
    cover: "/img/diseno.png",
  },
];

export default function Page() {
  return <PortfolioPage title='Diseño' projects={projects} />;
}
