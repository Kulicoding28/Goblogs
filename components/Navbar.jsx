import React, { useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import Link from "next/link";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffCanvas] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "/post" },
    { text: "Jobs", href: "/post" },
    { text: "Books", href: "/post" },
  ];
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
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="hover:border-b-2 hover:border-b-[#046251]  transition-duration-500 ease-in-out active:text-[#DBD9DA]">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/post" legacyBehavior>
                    <a className="hover:border-b-2 hover:border-b-[#046251] hover:transition-duration-500 active:text-[#DBD9DA]">
                      Tech
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/post" legacyBehavior>
                    <a className="hover:border-b-2 hover:border-b-[#046251] hover:transition-duration-500 active:text-[#DBD9DA]">
                      Design
                    </a>
                  </Link>
                </li>
                <li className="relative">
                  <a
                    className="hover:border-b-2 hover:border-b-[#046251] cursor-pointer flex items-center active:text-[#DBD9DA]"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    More
                    <svg
                      className="ml-1"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="-1"
                        x2="4.99731"
                        y2="0.00787747"
                        transform="matrix(0.682796 0.730609 0.682796 -0.730609 2 0.736359)"
                        stroke="#858585"
                        strokeWidth="2"
                      />
                      <line
                        x1="4.15837"
                        y1="4.29289"
                        x2="7.15837"
                        y2="1.29289"
                        stroke="#858585"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                  {dropdown && (
                    <ul className="absolute w-[200px] mt-1 bg-[#F5F5F5] rounded shadow-md shadow-[#046251] lg:-mx-56">
                      {dropdownList.map(({ text, href }) => (
                        <li
                          key={text}
                          className="border-b border-slate-700 last:border-b-0"
                        >
                          <a
                            href={href}
                            className="flex py-2 px-4  text-slate-900 hover:bg-[#046251] hover:text-[#F5F5F5]"
                          >
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
}
