import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Edición y Montaje",
    description: "Anuncio Vertical para Redes.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DXv4C5hjyPWx07HawSugEAf25V13zjo8BniNM",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Di9cjObt3ecgHAJu8s9TQCX5Z1WEkrmfzaxit",
    video: "https://player.vimeo.com/video/1219104502",
  },
  {
    title: "Edición y Montaje",
    description: "Spot Comercial Horizontal.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DwfOLO81MzmSFvBjx5LHdoXGh967gaNiwA8eq",
    detail: "/img/portafolios/video2.png",
    video: "https://player.vimeo.com/video/1216445330",
  },
  {
    title: "Edición y Montaje",
    description: "Cápsula Deportiva.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DwZzVho1MzmSFvBjx5LHdoXGh967gaNiwA8eq",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9D3FJFN5niS0X6pluxb3sjKCByvHE527OWFnMh",
    video: "https://player.vimeo.com/video/1221664277",
  },
  {
    title: "Edición Publicitaria",
    description: "Spots comerciales para marcas.",
    cover: "/img/edicion.png",
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
