import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";

export default function Home() {
  return (
    <div className="h-full flex flex-col m-5">
    <Hero />
    <SelectedProjects />
    </div>
  );
}
