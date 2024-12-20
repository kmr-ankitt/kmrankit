import { GraduationCap, MapPin } from "lucide-react";
import React from "react";

export default function Hero() {
  const age = new Date().getFullYear() - 2005;

  return (
    <div className="lowercase flex flex-col gap-5 my-8">
      <h1 className="font-bold text-2xl">Ankit Kumar Sahu</h1>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <MapPin className="w-4 h-4" />
          <p>Ranchi, India</p>
        </div>
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5" />
          <p>CGU, Bhubaneswar</p>
        </div>
      </div>
      <div className="w-12/12">
        <p className="font-extralight leading-relaxed ">
          I&apos;m a {age} year old CS undergrad. I love building fullstack web
          applications, low level stuffs or anything that interests me. My day
          starts and ends with the terminal.
        </p>
      </div>
    </div>
  );
}