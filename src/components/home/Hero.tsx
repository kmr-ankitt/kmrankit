import React from "react";

export default function Hero() {
  const age = new Date().getFullYear() - 2005;

  return (
    <div className="lowercase flex flex-col gap-4 my-8">
      <h1 className="font-bold text-2xl">Ankit Kumar Sahu</h1>
      <div>
        <p className="font-extralight">
          I&apos;m a {age} year old CS undergrad. I love building fullstack web
          applications, low level stuffs or anything that interests me. My day
          starts and ends with the terminal.
        </p>
      </div>
    </div>
  );
}