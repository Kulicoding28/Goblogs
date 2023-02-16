import Thumbnail from "./Thumbnail";
import Link from "next/link";
import { formatDate } from "../utils/date";
import HotList from "./HotList";

// export async function getServerSideProps() {
//   const reqHots = await fetch(
//     process.env.APIURL +
//       "/api/posts?[filters][hot]=true&populate[thumbnail]=data&populate[category]=data"
//   );
//   const hots = await reqHots.json();

//   return {
//     props: {
//       hots: hots.data.length < 1 ? false : hots.data,
//     },
//   };
// }

export default function FeaturedPost(props) {
  return (
    <article>
      <div>
        <div>
          <Link href={`/${props.attributes.slug}`} legacyBehavior>
            <a>
              <img
                src={
                  process.env.NEXT_PUBLIC_URL +
                  props.attributes.thumbnail.data.attributes.formats.small.url
                }
                className="rounded-md md:w-11/12 w-full"
              />
              <div className="md:mt-1 flex flex-col mt-2">
                <p className="font-light md:text-sm">
                  {props.attributes.category.data.attributes.name}
                  <span className=" p-1">|</span>
                  {formatDate(props.attributes.createdAt)}
                </p>
                <h1 className="font-bold lg:text-4xl md:text-2xl text-[#FFFFFF] text-2xl">
                  {props.attributes.title}
                </h1>
                <p className="lg:w-1/2 md:text-md md:w-3/4 lg:mt-2 md:mt-1 leading-relaxed ">
                  {props.attributes.headline}
                </p>
              </div>
            </a>
          </Link>
        </div>
        {/* <div className="lg:w-4/12 md:w-5/12 w-full md:mt-0 mt-2 ">
          <Link href="/detail" legacyBehavior>
            <a>
              <HotList hots={hots} />
            </a>
          </Link>
        </div> */}
      </div>
    </article>
  );
}
