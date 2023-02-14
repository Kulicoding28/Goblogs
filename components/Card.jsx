import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

export default function Card(props) {
  return (
    <article className="flex flex-col items-center content-center justify-between">
      <Link
        href={`/${props.attributes.slug}`}
        className=" rounded lg:mt-8 md:w-3/4 w-full md:mt-4 mt-2 "
      >
        <img
          src={
            process.env.NEXT_PUBLIC_URL +
            props.attributes.thumbnail.data.attributes.formats.small.url
          }
        />
      </Link>
      <InfoPost
        category={props.attributes.category.data.attributes.name}
        date={props.attributes.createdAt}
        title={props.attributes.title}
        slug={props.attributes.slug}
      />
    </article>
  );
}
