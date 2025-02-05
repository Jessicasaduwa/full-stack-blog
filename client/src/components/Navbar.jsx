import React, { useState } from "react";
import { Link } from "react-router-dom";
import Imagee from "./Imagee";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Link to={"/"}>
          <Imagee src="logo.png" alt="App logo" w={32} h={32} />
          <span>MYLOGO</span>
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-[#d7e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Trending</Link>
          <Link to="/posts">Most Popular</Link>
          <Link to="/">About</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-4 px-4 rounded-lg bg-blue-800 text-white">
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link to="/login">
            <button className="py-4 px-4 rounded-lg bg-blue-800 text-white">
              Login
            </button>
            Link
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link hrtoef="/">Home</Link>
        <Link to="/posts">Trending</Link>
        <Link to="/posts">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-4 px-4 rounded-lg bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
