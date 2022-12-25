import Link from "next/link";
import React from "react";

export default function InfoPost({ catagory, date, tittle }) {
  return (
    <>
      <div className="mt-2  flex flex-col lg:mx-14 md:mx-5 ">
        <div className="flex p-0">
          <p className="font-light lg:text-sm md:text-xs px-1 border-r-[1px] border-[#181818] text-[#181818] ">
            <Link href="/detail" legacyBehavior>
              <a>{catagory}</a>
            </Link>
          </p>
          <p className="font-light lg:text-sm md:text-xs  px-1 text-[#181818]">
            <Link href="/detail" legacyBehavior>
              <a>{date}</a>
            </Link>
          </p>
        </div>
        <h3 className="text-[#181818] font-bold lg:text-md md:text-sm mt-1 w-full">
          <Link href="/detail" legacyBehavior>
            <a>{tittle}</a>
          </Link>
        </h3>
      </div>
    </>
  );
}
