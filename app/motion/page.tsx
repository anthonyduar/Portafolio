import PortfolioPage, { type Project } from "../../components/PortfolioPage";

const projects: Project[] = [
  {
    title: "Motion Graphics 1",
    description: "Animaciones y transiciones avanzadas.",
    cover: "/img/motion.png",
  },
  {
    title: "Motion Graphics 2",
    description: "Efectos visuales y composición.",
    cover: "/img/motion.png",
  },
];

export default function Page() {
  return <PortfolioPage title='Motion Graphics' projects={projects} />;
}
