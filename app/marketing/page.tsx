import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Estrategia de Contenido",
    description: "Copywriting, diseño y video para eCommerce.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DxW2wRGQyCOsHqUzYwXRvFp3aeL9jQ74KoMig",
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DHzqjofhnwKN7U6cZJTECBsDib9AYWtv3qhkO" }, //marketing1
      { type: "video", url: "https://player.vimeo.com/video/1219104502" },
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Du3iOMkzS0myfAS8EzZP3b1NwOLedxRtsHKBj" }, //marketing1-1
    ],
  },
  {
    title: "Gestión de Contenido",
    description: "Copy, creación de contenido y tráfico Web.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DKLBFUYGzZwX6uITopBD05Vfe9JctKC8gPvdM",
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DJjRot2uGSO6P7sgiUF8rT4wpqkHKXuA3ZM59" }, //marketing2
      { type: "video", url: "https://player.vimeo.com/video/1221664277"},
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Dy6oJsTZGepMhSuyJo6viLjxIlQ9Er53skNZq" }, //marketing2-1
    ],
  },
];

export default function Page() {
  return <PortfolioPage title='Marketing Digital' projects={projects} />;
}