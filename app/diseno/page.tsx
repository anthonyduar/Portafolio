import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Diseño de Branding",
    description: "Creación de identidad de marca.",
    cover: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9D4AX0acx3jCFxlSMPwUOkBXeNJgfIa9qb6p0s",
    detail: "https://nz277r2pqt.ufs.sh/f/24ap935mOy9D7RbnYpIQPVtTUWuGlAma1qyHeFXiR5cfY63N",
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
