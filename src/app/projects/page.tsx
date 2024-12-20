import ProjectList from "@/components/projects/ProjectList";

export default function page() {
  return (
    <div className="h-full m-5 lowercase mt-10">
      <h1 className="text-2xl font-bold">my works</h1>
      <ProjectList />
    </div>
  )
}
