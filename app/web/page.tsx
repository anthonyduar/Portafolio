import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Desarrollo Next.js",
    description: "Portal de noticias deportivas con Next.js y WordPress API.",
    cover: "/img/portada-web1.png",
    detail: "/img/portafolios/web1.png",
    link: "https://actualnow.vercel.app/",
    repository: "https://github.com/anthonyduar/ActualNow",
  },
  {
    title: "Automatización Web",
    description: "Plataforma e-commerce con sincronización automática.",
    cover: "/img/portada-web2.png",
    detail: "/img/portafolios/web2.png",
    link: "https://eparadise.vercel.app/",
    repository: "https://github.com/anthonyduar/eParadise",
  },
];

export default function Page() {
  return <PortfolioPage title='Desarrollo Web' projects={projects} />;
}
