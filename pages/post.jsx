import React, { useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import mockPost from "../utils/post.json";

export default function Post() {
  const [post, setPost] = useState(mockPost);
  return (
    <Layout>
      <Container>
        <SectionHeader>Design</SectionHeader>
        {!post.length ? (
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
        )}
      </Container>
    </Layout>
  );
}
