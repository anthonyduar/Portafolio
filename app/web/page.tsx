import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Desarrollo Next.js",
    description: "Portal de noticias deportivas con Next.js y WordPress API.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Dc6plHJLYu9QAVRhPvtNpUGEceCKqiT0xI21r",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9Dv1ByveaE2HRPuDox6V9QpZqAg4sMdGyNhn8e",
    link: "https://actualnow.vercel.app/",
    repository: "https://github.com/anthonyduar/ActualNow",
  },
  {
    title: "Automatización Web",
    description: "Plataforma e-commerce con sincronización automática.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DAqyR194LK6AE8QusyVRlJNnWMGTbzwxe7BoF",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9DK54zPBGzZwX6uITopBD05Vfe9JctKC8gPvdM",
    link: "https://eparadise.vercel.app/",
    repository: "https://github.com/anthonyduar/eParadise",
  },
];

export default function Page() {
  return <PortfolioPage title='Desarrollo Web' projects={projects} />;
}
