import Container from "../components/Container";
import FeaturedPost from "../components/FeaturedPost";
import HotList from "../components/HotList";
import PostsList from "../components/PostsList";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    process.env.APIURL +
      "/api/posts?[filters][featured]=true&populate[thumbnail]=data&populate[category]=data"
  );
  const featured = await reqFeatured.json();

  const reqHots = await fetch(
    process.env.APIURL +
      "/api/posts?[filters][hot]=true&populate[thumbnail]=data&populate[category]=data"
  );
  const hots = await reqHots.json();

  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URL +
      "/api/posts?[filters][featured][$ne]=true&[filters][hot][$ne]=true&populate=*"
  );
  const posts = await reqPosts.json();

  return {
    props: {
      featured: featured.data.length < 1 ? false : featured.data[0],
      hots: hots.data.length < 1 ? false : hots.data,
      posts: posts.data,
    },
  };
}
export default function Home({ featured, posts, hots }) {
  return (
    <>
      <Container>
        <articel>
          <h3 className="lg:mt-24 md:mt-16 lg:text-3xl md:text-xl mt-16 font-bold text-[#046251] align-top flex">
            Poppular<span className="mx-1 text-5xl">News.</span>
          </h3>

          <div className="flex mt-10 -mx-4 items-start flex-wrap align-middle">
            <div className="flex lg:w-8/12 md:w-7/12 w-full ">
              {featured && <FeaturedPost {...featured} />}
            </div>
            <div className="flex lg:w-4/12 md:w-5/12 w-full md:mt-0 mt-2 ">
              <HotList hots={hots} />
            </div>
          </div>
        </articel>
        <PostsList posts={posts} />
      </Container>
    </>
  );
}
