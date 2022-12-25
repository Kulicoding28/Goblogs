import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

export default function Card({ thumbnail, ...infopost }) {
  return (
    <article className="flex flex-col items-center content-center justify-between">
      <Link
        href="/detail"
        className=" rounded lg:mt-8 md:w-3/4 w-full md:mt-4 mt-2 "
      >
        <img src={thumbnail} />
      </Link>
      <InfoPost {...infopost} />
    </article>
  );
}
