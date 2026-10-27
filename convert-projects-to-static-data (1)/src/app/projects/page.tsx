import ProjectsListClient from "@/components/ProjectsListClient";
import { projects } from "@/data/projects";

export const metadata = {
  title: "PUIUX — كل المشاريع | All Projects",
};

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />;
}
