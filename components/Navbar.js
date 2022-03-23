import React from "react";
import Link from "next/link";
import { navLinks } from "./utils/data";

const Navbar = () => {
  return (
    <nav className="left-0 top-0 bg-black opacity-[85] sticky border-b border-slate-900/10 z-50 drop-shadow-md">
      <div className="mx-auto py-8 px-[4vw]">
        <div className="flex items-center justify-between text-white w-full">
          {/* nav list */}
          <div className="flex items-center space-x-[2vw]">
            {navLinks.map(({ id, name, path }) => (
              <Link key={id} href={path}>
                <a className="">
                  <span className="py-2 px-4 font-semibold hover:bg-white hover:rounded-[60px] hover:text-black">
                    {name}
                  </span>
                </a>
              </Link>
            ))}
          </div>

          {/* icon */}
          <div>Icon</div>

          {/* actions */}
          <div className="flex items-center space-x-[2vw]">
            <a href="/sign-up">
              <span className="border border-white py-[.35rem] px-6 rounded-[100vw] hover:bg-white hover:text-black font-semibold">
                Sign up
              </span>
            </a>
            <a href="/sign-in">
              <span className="border border-white py-[.35rem] px-6 rounded-[100vw] hover:bg-white hover:text-black font-semibold">
                Sign in
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
