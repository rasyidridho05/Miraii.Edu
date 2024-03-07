import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [state, setState] = useState(false);
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navigation = [
    { title: "Home", path: "/", id: "home" },
    { title: "Game", path: "/#game", id: "game" },
    { title: "Creator", path: "/#creator", id: "creator" },
  ];

  const scrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <nav className="bg-[#1C1C1C] border-none w-full md:static md:text-sm fixed">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-1 md:py-2 md:block">
          <Link className="flex items-center" href="/">
            <Image src="/images/Logo.webp" width={64} height={64} alt="logo" />
            <h1 className=" text-xl">PPPPP</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-400 transition-all transform duration-300"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white hover:text-gray-400 transition-all transform duration-300"
                >
                  {" "}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={item.path}
                      className="block"
                      onClick={() => scrollTo(item.id)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
