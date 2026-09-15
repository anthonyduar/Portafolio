import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Edición y Montaje",
    description: "Anuncio Vertical para Redes.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DXv4C5hjyPWx07HawSugEAf25V13zjo8BniNM",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9D5gzoZ98e3RqClHDgYzw7kT5boVBAUntSm9sa",
    video: "https://player.vimeo.com/video/1219104502",
  },
  {
    title: "Edición y Montaje",
    description: "Spot Comercial Horizontal.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DwfOLO81MzmSFvBjx5LHdoXGh967gaNiwA8eq",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DwaEj7Lb1MzmSFvBjx5LHdoXGh967gaNiwA8e",
    video: "https://player.vimeo.com/video/1216445330",
  },
  {
    title: "Edición y Montaje",
    description: "Cápsula Deportiva.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DwZzVho1MzmSFvBjx5LHdoXGh967gaNiwA8eq",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Dhaw7ywWSlKjeybLA94CdMTkomID56cE27gRn",
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
