import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Redacción SEO",
    description: "Artículo de eCommerce.",
    cover: "/img/portafolios/articulo2.png",
    detail: "/img/portafolios/articulo2.png",
    link: "https://eparadise.vercel.app/articulo/jbl-go-4",
  },
  {
    title: "Redacción Periodística",
    description: "Noticia Deportiva.",
    cover: "/img/portafolios/noticia1.png",
    detail: "/img/portafolios/noticia1.png",
    link: "https://actualnow.vercel.app/shai-record-thunder-celtics",
  },
  {
    title: "Redacción SEO",
    description: "Artículo de eCommerce.",
    cover: "/img/portafolios/articulo1.png",
    detail: "/img/portafolios/articulo1.png",
    link: "https://eparadise.vercel.app/articulo/mundo-jurásico-divertido",
  },
  {
    title: "Redacción Periodística",
    description: "Noticia Deportiva.",
    cover: "/img/portafolios/noticia2.png",
    detail: "/img/portafolios/noticia2.png",
    link: "https://actualnow.vercel.app/venezuela-eeuu-wbc",
  },
];

export default function Page() {
  return (
    <PortfolioPage
      title='Redacción'
      projects={projects}
      cardHeight='h-[130px]'
    />
  );
}
