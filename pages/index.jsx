import { useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import FeaturedPost from "../components/FeaturedPost";
import Layout from "../components/Layout";
import mockPost from "../utils/post.json";

export default function Home() {
  const [post, setPost] = useState(mockPost);
  return (
    <>
      <Layout>
        <Container>
          <FeaturedPost />
          <div className="flex mt-12 bg-[#F5F5F5] -mx-4 flex-wrap pb-8 ">
            {post.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-2">
                <Card {...post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
