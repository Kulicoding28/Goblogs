import Link from "next/link";
import React from "react";
import { formatDate } from "../utils/date";
export default function InfoPost({ category, date, title, slug }) {
  return (
    <>
      <div className="mt-2  flex flex-col lg:mx-14 md:mx-5 ">
        <div className="flex p-0">
          <p className="font-light lg:text-sm md:text-xs px-1 border-r-[1px] border-[#181818] text-[#181818] ">
            <Link href={slug} legacyBehavior>
              <a>{category}</a>
            </Link>
          </p>
          <p className="font-light lg:text-sm md:text-xs  px-1 text-[#181818]">
            <Link href={slug} legacyBehavior>
              <a>{formatDate(date)}</a>
            </Link>
          </p>
        </div>
        <h3 className="text-[#181818] font-bold lg:text-md md:text-sm mt-1 w-full">
          {slug ? (
            <Link href={slug} legacyBehavior>
              <a>{title}</a>
            </Link>
          ) : (
            <>{title}</>
          )}
        </h3>
      </div>
    </>
  );
}
