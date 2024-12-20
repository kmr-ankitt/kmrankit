import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="h-full flex flex-col m-5">
    <Hero />
    <Separator />
    <SelectedProjects />
    </div>
  );
}
