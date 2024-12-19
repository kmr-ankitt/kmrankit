"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useRouter } from "next/navigation";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Projects",
    route: "/projects",
  },
];

export default function Header() {
  const router = useRouter();
  
  function isKeyPressed() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "h") {
        e.preventDefault();
        router.push("/");
      } else if (e.key === "p") {
        e.preventDefault();
        router.push("/projects");
      }
    });
  }
  isKeyPressed();

  return (
    <div className="flex items-center justify-between m-5">
      <div className="flex items-center gap-4 lowercase">
        {routes.map((item, index) => (
          <Link href={item.route} key={index}>
            {"[" + item.name[0] + "] " + item.name}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
}
