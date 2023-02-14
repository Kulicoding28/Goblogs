import React, { useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import Link from "next/link";

export default function Navbar({ categories }) {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffCanvas] = useState(false);
  const items = categories.data.map((category) => ({
    name: category.attributes.name,
    href: `/category/${category.attributes.slug}`,
  }));
  return (
    <div>
      <nav>
        <Container>
          <div className=" flex items-center content-center md:justify-items-start ">
            <div className="flex lg:hidden md:mr-2">
              <button
                onClick={() => {
                  setOffCanvas(!offcanvas);
                }}
              >
                <Icon />
              </button>
            </div>
            <div className="w-2/12 md:ml-0 ml-2">
              <Link href="/" legacyBehavior>
                <a className="flex gap-1">
                  <img
                    src="/icon.png"
                    className="md:w-8 md:h-8 lg:w-12 lg:h-12 w-6 h-6"
                  />
                  <h1 className="  font-bold font-outline-2 hover:font-outline-4 m-auto text-[#121212] md:text-xl lg:text-4xl text-lg">
                    GO.BLOGS
                  </h1>
                </a>
              </Link>
            </div>
            <div className=" md:w-5/12 lg:px-6 md:px-12 lg:ml-24  w-5/12 md:mx-end ml-auto">
              <input
                className="bg-[#121212] py-1 md:px-9 px-9 w-full rounded-full border-[1px] border-[#046251] focus:border-none focus:ring-1 focus:ring-slate-700 bg-search font-light text-sm"
                placeholder="search"
              ></input>
            </div>
            <div
              className={`lg:w-5/12 bg-[#121212] w-full fixed top-0 left-0 h-full lg:h-auto lg:p-0 p-10 transition-all lg:static ${
                offcanvas ? "left-0" : "-left-full"
              }`}
            >
              <button
                className="absolute top-10 right-10 lg:hidden"
                onClick={() => {
                  setOffCanvas(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ul className="lg:space-x-6 flex lg:items-center lg:px-16 md:px-6 md:text-sm lg:text-lg flex-col lg:flex-row space-y-4 lg:space-y-0 ">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} legacyBehavior>
                      <a className="hover:border-b-2 hover:border-b-[#046251]  transition-duration-500 ease-in-out active:text-[#DBD9DA]">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
}
