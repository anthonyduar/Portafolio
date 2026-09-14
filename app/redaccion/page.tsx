import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Redacción SEO",
    description: "Artículo de eCommerce.",
    cover: "/img/portafolios/portada-articulo2.png",
    media: [
      { type: "image", url: "/img/portafolios/articulo2-1.png" }, 
      { type: "image", url: "/img/portafolios/articulo2.png" }  
    ],
    link: "https://eparadise.vercel.app/articulo/jbl-go-4",
  },
    {
    title: "Noticia Periodística",
    description: "Periodismo deportivo.",
    cover: "/img/portafolios/portada-noticia1.png",
    media: [
      { type: "image", url: "/img/portafolios/noticia1-1.png" }, 
      { type: "image", url: "/img/portafolios/noticia1.png" }  
    ],
    link: "https://actualnow.vercel.app/shai-record-thunder-celtics",
  },
  {
     title: "Redacción SEO",
    description: "Artículo de eCommerce.",
    cover: "/img/portafolios/portada-articulo1.png",
    media: [
      { type: "image", url: "/img/portafolios/articulo2-1.png" }, 
      { type: "image", url: "/img/portafolios/articulo2.png" }  
    ],
    link: "https://eparadise.vercel.app/articulo/mundo-jur%C3%A1sico-divertido",
  },
   {
    title: "Noticia Periodística",
    description: "Periodismo deportivo.",
    cover: "/img/portafolios/portada-noticia2.png",
    media: [
      { type: "image", url: "/img/portafolios/noticia2-1.png" }, 
      { type: "image", url: "/img/portafolios/noticia2.png" }  
    ],
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
