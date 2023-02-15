import React from "react";
import Card from "./Card";

export default function PostsList({
  posts,
  noresultTitle = "No Result",
  noresultDescription = " We Couldnt Find Any Posts With your keyword. Please Try Another keyword",
}) {
  return (
    <div className="flex mt-12 bg-[#F5F5F5] -mx-4 flex-wrap pb-8 ">
      {!posts.length ? (
        <div className="text-center mt-10 mb-48 mx-auto">
          <h2 className="text-[#046251] text-6xl text-center ">
            {noresultTitle}
          </h2>
          <p className="mt-6 md:w-5/12 mx-auto w-full ">
            {noresultDescription}
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="md:w-4/12 w-full px-4 py-2 ">
            <Card {...post} />
          </div>
        ))
      )}
    </div>
  );
}
