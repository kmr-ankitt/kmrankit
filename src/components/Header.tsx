"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

  const pathname = usePathname();

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
        {routes.map((item, index) => {
          const isActive = item.route === pathname;
          return (
            <Link
              key={index}
              href={item.route}
              className={cn(
                "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                !isActive && "text-neutral-500"
              )}
            >
              <span className="relative px-2 py-[.20rem]">
                {item.name}
                {item.route === pathname ? (
                  <motion.div
                    className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r"
                    layoutId="sidebar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
              </span>
            </Link>
          );
        })}
      </div>
      <ModeToggle />
    </div>
  );
}
