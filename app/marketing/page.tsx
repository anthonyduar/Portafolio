import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Estrategia de Contenido",
    description: "Copywriting, diseño y video para eCommerce.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DxW2wRGQyCOsHqUzYwXRvFp3aeL9jQ74KoMig",
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DoMjg9rJ9Ze0krowviVJ7txAhGsfdmaqPLuBM" }, //marketing1
      { type: "video", url: "https://player.vimeo.com/video/1219104502" },
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Da0K6CKlS6KsbWTE7rh5nPYiwLapN0DAOCmxX" }, //marketing1-1
    ],
  },
  {
    title: "Gestión de Contenido",
    description: "Copy, creación de contenido y tráfico Web.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DKLBFUYGzZwX6uITopBD05Vfe9JctKC8gPvdM",
    media: [
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DzYDk4IbM9YHmJRkouq4Ay23hceZfLVjCsWSr" }, //marketing2
      { type: "video", url: "https://player.vimeo.com/video/1221664277"},
      { type: "image", url: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DYyMmcR2KbJ39Rq4ViWMLEceGpmgk6yQo5sha" }, //marketing2-1
    ],
  },
];

export default function Page() {
  return <PortfolioPage title='Marketing Digital' projects={projects} />;
}