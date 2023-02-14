import React, { useState } from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";

export async function getServerSideProps({ params: { category } }) {
  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URL + "/api/posts?_where[category.slug]=" + category
  );
  const posts = await reqPosts.json();

  if (!posts.length)
    return {
      notFound: true,
    };

  return {
    props: {
      posts,
    },
  };
}

export default function Post({ posts: initialPosts }) {
  const [posts, setPost] = useState(initialPosts);
  console.log(posts);

  return (
    <>
      <Container>
        <SectionHeader>Design</SectionHeader>
        <div className="flex mt-12 bg-[#F5F5F5] -mx-4 flex-wrap pb-8 ">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-2 ">
              <Card {...post} />
            </div>
          ))}
        </div>

        {/* {!post.length ? (
          <div className="text-start mt-10 mb-48">
            <h2 className="text-[#046251] text-5xl  ">No Result</h2>
            <p className="mt-2 md:w-5/12 mx-auto w-full">
              We Couldnt Find Any Post With The Keyboard PORN, Please Try
              Another Keyboard
            </p>
          </div>
        ) : (
          <div className="flex mt-12 bg-[#F5F5F5] -mx-4 flex-wrap pb-8 ">
            {post.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-2 ">
                <Card {...post} />
              </div>
            ))}
          </div>
        )} */}
      </Container>
    </>
  );
}
