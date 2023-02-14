import { data } from "autoprefixer";
import { useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import FeaturedPost from "../components/FeaturedPost";
import Layout from "../components/Layout";
import mockPost from "../utils/post.json";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    process.env.APIURL +
      "/api/posts?[filters][featured]=true&populate[thumbnail]=data&populate[category]=data"
  );
  const featured = await reqFeatured.json();

  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URL +
      "/api/posts?[filters][featured][$ne]=true&populate=*"
  );
  const posts = await reqPosts.json();

  return {
    props: {
      featured: featured.data.length < 1 ? false : featured.data[0],
      posts: posts.data,
    },
  };
}
export default function Home({ featured, posts: initialPosts, categories }) {
  const [posts, setPost] = useState(initialPosts);
  return (
    <>
      <Container>
        {featured && <FeaturedPost {...featured} />}
        <div className="flex mt-12 bg-[#F5F5F5] -mx-4 flex-wrap pb-8 ">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-2">
              <Card {...post} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
