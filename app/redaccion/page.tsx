import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Redacción SEO",
    description: "Artículo de eCommerce.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DsL8OTEDka07tRWhJbLZO2ocK5CgeNx6mTwlP",
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DgPheOAEzdLr6bWwGiNoQ5h8k2ZsDAgYxHXlU" }, //redaccion1-1
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DJ2chaRuGSO6P7sgiUF8rT4wpqkHKXuA3ZM59" } //redaccion1 
    ],
    link: "https://eparadise.vercel.app/articulo/jbl-go-4",
  },
    {
    title: "Redacción Periodística",
    description: "Noticia deportiva.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DNtF6I1wKi4RfuHx5kbIQhTPFt0z1SyD8lcnB",
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DaqJrBcwlS6KsbWTE7rh5nPYiwLapN0DAOCmx" }, //redaccion2-1
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DJi3EKdGuGSO6P7sgiUF8rT4wpqkHKXuA3ZM5" } // redaccion2 
    ],
    link: "https://actualnow.vercel.app/shai-record-thunder-celtics",
  },
  {
     title: "Redacción SEO",
    description: "Artículo de eCommerce.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DhZTmR7WSlKjeybLA94CdMTkomID56cE27gRn",
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Di9rnnB3ecgHAJu8s9TQCX5Z1WEkrmfzaxitR" }, //redaccion3-1 
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DGpgU8aBPnYgzdyJIF4cj2bwEXSRTH1Q5xLDm" } //redaccion3 
    ],
    link: "https://eparadise.vercel.app/articulo/mundo-jur%C3%A1sico-divertido",
  },
   {
    title: "Redacción Periodística",
    description: "Noticia deportiva.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DcMfWmnLYu9QAVRhPvtNpUGEceCKqiT0xI21r", 
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DDBexhN5KV0ETaeICvmU39Pwtg7u8NcS1yDG4" }, //redaccion4-1 
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9D8YHvP7AMTcbnIy4HVGipNP1ae92AEhl7DzdL" } //redaccion4 
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
