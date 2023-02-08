import Thumbnail from "./Thumbnail";
import Link from "next/link";

export default function FeaturedPost(props) {
  return (
    <article>
      <h3 className="lg:mt-24 md:mt-16 lg:text-3xl md:text-xl mt-16 font-bold text-[#046251] align-top flex">
        Poppular<span className="mx-1 text-5xl">News.</span>
      </h3>
      <div className="flex mt-10 -mx-4 items-start flex-wrap">
        <div className="lg:w-8/12 md:w-7/12 w-full ">
          <Link href="/detail" legacyBehavior>
            <a>
              <img
                src={
                  process.env.APIURL +
                  props.attributes.thumbnail.data.attributes.formats.small.url
                }
                className="rounded-md md:w-11/12 w-full"
              />
              <div className="md:mt-1 flex flex-col mt-2">
                <p className="font-light md:text-sm">
                  {props.attributes.category.data.attributes.name} |
                  {props.attributes.createdAt}
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
        <div className="lg:w-4/12 md:w-5/12 w-full md:mt-0 mt-2 ">
          <Link href="/detail" legacyBehavior>
            <a>
              <Thumbnail
                image="image2.png"
                catagory={props.attributes.category.data.attributes.name}
                tittle={props.attributes.createdAt}
                judul="Mood traps and  how to overcome them"
              />
              <Thumbnail
                image="image3.png"
                catagory="Jobs"
                tittle="09 Nov 2022"
                judul="Say NO if there is no contract for your project!"
              />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}
