import ProjectList from "@/components/projects/ProjectList";
import HyperText from "@/components/ui/hyper-text";

export default function page() {
  return (
    <div className="h-full m-7 lowercase">
      <div className="md:w-screen max-w-screen-lg mx-auto flex items-center gap-2">
        <span className="text-[#ff6b35] text-2xl font-bold">{">"}</span>
        <HyperText
          duration={1200}
          animateOnHover={false}
          className="font-bold text-2xl"
        >
          my works
        </HyperText>
      </div>
      <ProjectList />
    </div>
  );
}
