import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Container from "../components/Container";
import InfoPost from "../components/InfoPost";
import Layout from "../components/Layout";
import { formatDate } from "../utils/date";

export async function getServerSideProps({ params: { slug } }) {
  const reqDetail = await fetch(
    process.env.NEXT_PUBLIC_URL +
      `/api/posts?[filters][slug]=${slug}&populate[thumbnail]=data&populate[category]=data`
  );
  const single = await reqDetail.json();

  if (!single.data.length)
    return {
      notFound: true,
    };

  return {
    props: {
      single: single.data.length > 0 ? single.data[0] : {},
    },
  };
}
export default function Detail({
  single: {
    attributes: {
      title,
      slug,
      category,
      publishedAt,
      thumbnail,
      headline,
      content,
    },
  },
}) {
  return (
    <>
      <Container>
        <div className="w-full mx-auto flex items-center justify-center bg-slate-200 mt-10 font-bold rounded-sm flex-col md:mb-4">
          <InfoPost
            slug={slug}
            category={category.data.attributes.name}
            date={formatDate(publishedAt)}
            title={title}
          />
          <div className="">
            <img
              src={
                process.env.NEXT_PUBLIC_URL +
                thumbnail.data.attributes.formats.small.url
              }
              className=" w-full md:mt-4 mt-2"
            />
          </div>
        </div>

        <div className="w-full mx-auto">
          <p className="  bg-slate-200 text-black md:text-lg md:p-20 p-5 text-md text-center tracking-wide leading-loose ">
            {headline}
          </p>

          <p className="  bg-slate-200 text-black text-md md:p-20 p-2 text-left mt-4 tracking-wide leading-loose inline-block align-middle  ">
            <ReactMarkdown className="prose md:prose-lg lg:prose-xl">
              {content}
            </ReactMarkdown>
          </p>
        </div>
      </Container>
    </>
  );
}
