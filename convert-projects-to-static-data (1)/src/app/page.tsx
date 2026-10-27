import Profile from "@/components/Profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return <Profile projects={projects} />;
}
