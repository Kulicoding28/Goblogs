import Head from "next/head";
import Container from "../components/Container";
import PostsList from "../components/PostsList";
import SectionHeader from "../components/SectionHeader";

export async function getServerSideProps({ query: { q } }) {
  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URL +
      `/api/posts?[filters][title][$contains]=${q}&populate=*`
  );
  const posts = await reqPosts.json();

  return {
    props: {
      posts: posts.data,
      q,
    },
  };
}

export default function Search({ posts, q }) {
  return (
    <>
      <Head>
        <title>search &mdash; Goblogs</title>
      </Head>
      <Container>
        <SectionHeader>search:{q}</SectionHeader>
        <PostsList posts={posts} />
      </Container>
    </>
  );
}
