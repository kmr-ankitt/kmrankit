import ProjectList from "@/components/projects/ProjectList";

export default function page() {
  return (
    <div className="h-full m-7 lowercase mt-10 ">
      <div className="w-screen">
        <h1 className="text-2xl font-bold">
          <span className="text-[#ff6b35]">{">"}</span> my works
        </h1>
      </div>
      <ProjectList />
    </div>
  );
}
