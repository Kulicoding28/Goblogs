import Head from "next/head";
import Container from "../../components/Container";
import PostsList from "../../components/PostsList";
import SectionHeader from "../../components/SectionHeader";

export async function getServerSideProps({
  params: { category: categorySlug },
}) {
  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_URL +
      "/api/categories?[filters][slug][$eq]=" +
      categorySlug
  );
  const category = await reqCategory.json();
  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URL +
      `/api/posts?[filters][category][slug][$eq]=${categorySlug}&populate=*`
  );
  const posts = await reqPosts.json();

  return {
    props: {
      posts: posts.data,
      category: category.data.length > 0 ? category.data[0] : {},
    },
  };
}

export default function Post({ posts, category }) {
  return (
    <>
      <Head>
        <title>{category.attributes.name} &mdash; Goblogs</title>
      </Head>
      <Container>
        <SectionHeader>{category.attributes.name}</SectionHeader>
        <PostsList
          posts={posts}
          noresultTitle="No Posts"
          noresultDescription="No Post In This Category"
        />

        {/* 
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
