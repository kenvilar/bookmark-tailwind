"use client";
import { useRef } from "react";
import Image from "next/image";
import Logo from "@/app/images/logo-bookmark.svg";

const Header = () => {
  const btn: any = useRef(null);
  const menu: any = useRef(null);
  const logo: any = useRef(null);
  const menuItems = ["Features", "Download", "FAQ"];

  const navToggle = () => {
    btn.current?.classList?.toggle("open");
    menu.current?.classList?.toggle("flex");
    menu.current?.classList?.toggle("hidden");
  };

  return (
    <>
      <nav className="container relative mx-auto p-6">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="z-30">
            <Image ref={logo} src={Logo} alt="logo" id="logo" className="" />
          </div>

          {/*menu items*/}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            {menuItems.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="tracking-widest hover:text-softRed"
                >
                  {item}
                </a>
              );
            })}

            <a
              href="#"
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
            >
              Login
            </a>
          </div>

          {/*hamburger button*/}
          <button
            ref={btn}
            id="menu-btn"
            className="z-30 block md:hidden focus:outline-none hamburger"
            onClick={navToggle}
          >
            <span className="hamburger-top" />
            <span className="hamburger-middle" />
            <span className="hamburger-bottom" />
          </button>
        </div>

        {/*mobile menu*/}
        <div
          ref={menu}
          id="menu"
          className="fixed inset-0 z-20 hidden flex flex-col items-center self-end w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
        >
          <div className="w-full py-3 text-center">
            <a href="#features" className="block hover:text-softRed">
              Features
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#download" className="block hover:text-softRed">
              Download
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#faq" className="block hover:text-softRed">
              FAQ
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#" className="block hover:text-softRed">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
