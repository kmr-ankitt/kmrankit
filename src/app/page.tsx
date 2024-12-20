import Hero from "@/components/home/Hero";
import SelectedProjects from "@/components/home/SelectedProjects";

export default function Home() {
  return (
    <div className="h-full flex flex-col m-5">
    <Hero />
    <SelectedProjects />
    </div>
  );
}