import Container from "../components/Container";
import FeaturedPost from "../components/FeaturedPost";
import PostsList from "../components/PostsList";

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
export default function Home({ featured, posts }) {
  return (
    <>
      <Container>
        {featured && <FeaturedPost {...featured} />}
        <PostsList posts={posts} />
      </Container>
    </>
  );
}
