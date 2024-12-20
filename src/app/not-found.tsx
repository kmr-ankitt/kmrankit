import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-start h-[70vh] px-4">
      <div className="text-center">
        <p className="text-gray-400">
          looks like you&apos;ve wandered into uncharted territory
        </p>
        <Link
          href="/"
          className="inline-block text-gray-400 hover:text-accent transition-colors mt-4"
        >
          <Button variant={"outline"}>return home</Button>
        </Link>
      </div>
    </div>
  );
}
