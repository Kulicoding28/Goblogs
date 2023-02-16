import Link from "next/link";
import React from "react";
import { formatDate } from "../utils/date";

function Thumbnail(props) {
  return (
    <>
      <Link href={`/${props.attributes.slug}`} legacyBehavior>
        <a>
          <div className="flex items-center">
            <img
              src={
                process.env.NEXT_PUBLIC_URL +
                props.attributes.thumbnail.data.attributes.formats.small.url
              }
              className="rounded-xl w-full mt-1"
            />
          </div>

          <div className="mt-2 flex-col ">
            <div className="flex">
              <p className="font-light text-sm px-1 border-r-[1px] border-[#858585] ">
                {props.attributes.category.data.attributes.name}
              </p>
              <p className="font-light text-sm px-1">
                {formatDate(props.attributes.createdAt)}
              </p>
            </div>
            <h3 className="text-[#FFFFFF] font-bold lg:text-lg md:text-md text-lg mt-1">
              {props.attributes.title}
            </h3>
          </div>
        </a>
      </Link>
    </>
  );
}

export default Thumbnail;
