import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="fixed flex w-screen h-20 items-center justify-between px-10 py-4 z-20 bg-gray-200/50">
        <Scroll to="home" smooth={true} duration={600} offset={-50}>
          <span className="text-2xl font-lilita cursor-pointer">
            Takashi Taguchi
          </span>
        </Scroll>
        <ul className="hidden md:flex space-x-3">
          <Scroll to="home" smooth={true} duration={600} offset={-50}>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              ホーム
            </li>
          </Scroll>
          <Scroll to="about" smooth={true} duration={600} offset={-50}>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              プロフィール
            </li>
          </Scroll>
          <Scroll to="skills" smooth={true} duration={600} offset={-50}>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              スキル
            </li>
          </Scroll>
          <Scroll to="works" smooth={true} duration={600} offset={-50}>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              制作物
            </li>
          </Scroll>
          <Scroll to="contact" smooth={true} duration={600} offset={-50}>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              コンタクト
            </li>
          </Scroll>
        </ul>

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FiMenu size={30} /> : <FiX size={30} />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-200 bg-opacity-80"
          }
        >
          <Scroll
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={600}
            offset={-50}
          >
            <li className="hover:underline underline-offset-4 cursor-pointer py-4 text-3xl">
              home
            </li>
          </Scroll>
          <Scroll
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={600}
            offset={-50}
          >
            <li className="hover:underline underline-offset-4 cursor-pointer py-4 text-3xl">
              about
            </li>
          </Scroll>
          <Scroll
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={600}
            offset={-50}
          >
            <li className="hover:underline underline-offset-4 cursor-pointer py-4 text-3xl">
              skills
            </li>
          </Scroll>
          <Scroll
            onClick={handleClick}
            to="works"
            smooth={true}
            duration={600}
            offset={-50}
          >
            <li className="hover:underline underline-offset-4 cursor-pointer py-4 text-3xl">
              works
            </li>
          </Scroll>
          <Scroll
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={600}
            offset={-50}
          >
            <li className="hover:underline underline-offset-4 cursor-pointer py-4 text-3xl">
              contact
            </li>
          </Scroll>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
