import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div className="font-bold text-xl">
          <Link href="/">Bughowi</Link>
        </div>

        {/* Navbar on large screen */}
        <ul className="hidden sm:flex items-center justify-between gap-2">
          <li>
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#biodata"
            >
              Biodata
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#education"
            >
              Education
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* End Here*/}

        {/* Navbar on small screen / mobile device */}
        <div className="block sm:hidden cursor-pointer hover:transition hover:scale-125">
          <FaBars onClick={() => setNav(!nav)} />
        </div>
        {/* End here */}
      </div>

      {/* Show navar in small screen */}
      <div
        className={
          nav
            ? "fixed bg-black bg-opacity-60 h-screen m-screen z-50 top-0 left-0 right-0"
            : "hidden"
        }
      >
        <div className="w-[80%] h-full bg-gray-800 text-slate-200 p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl ">Bughowi</h1>
            <button
              onClick={() => setNav(!nav)}
              className="p-4 rounded-full bg-slate-900 shadow-lg hover:transition hover:scale-110 hover:shadow-lg hover:duration-300"
            >
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 my-4 text-lg">
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#biodata"
              onClick={() => setNav(!nav)}
            >
              Biodata
            </a>
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#skills"
              onClick={() => setNav(!nav)}
            >
              Skills
            </a>
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#education"
              onClick={() => setNav(!nav)}
            >
              Education
            </a>
            <a
              className="hover:text-orange-500 transition duration-500"
              href="#contact"
              onClick={() => setNav(!nav)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
