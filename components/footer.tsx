import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaYoutube, LiaInstagram, LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#1C1C1C]">
      <div className="container max-w-screen-xl flex flex-col justify-start py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 ">
          <Image
            src="/images/MIRAI.webp"
            alt="...loading"
            width={200}
            height={200}
          />
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3 ">
          <div className="space-y-3 flex flex-col justify-center">
            <h3 className=" uppercase font-medium">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 "
                  rel="noopener noreferrer"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 "
                  rel="noopener noreferrer"
                  href="/#about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 "
                  rel="noopener noreferrer"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 "
                  rel="noopener noreferrer"
                  href="/#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 flex flex-col justify-center">
            <h3 className="tracki uppercase font-medium">Other Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 "
                  rel="noopener noreferrer"
                  href="/team"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 pointer-events-none"
                  rel="noopener noreferrer"
                  href="/services/photoandvideo"
                >
                  Photo & Videograph
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 pointer-events-none"
                  rel="noopener noreferrer"
                  href="/services/design"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-400 transition-all transform duration-300 pointer-events-none "
                  rel="noopener noreferrer"
                  href="/services/game"
                >
                  Game Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 flex flex-col justify-center">
            <div className="uppercase font-medium">Social media</div>
            <div className="flex justify-start space-x-3">
              <div className="flex lg:flex-col gap-2 ">
                <Link
                  className="flex items-center hover:text-gray-400 transition-all transform duration-300"
                  href=" https://www.instagram.com/miraii.studio/"
                >
                  <LiaInstagram size={24} />
                  <h5 className="pl-2">Instagram</h5>
                </Link>
                <Link
                  className="flex items-center hover:text-gray-400 transition-all transform duration-300"
                  href=" https://www.instagram.com/miraii.studio/"
                >
                  <LiaLinkedin size={24} />
                  <h5 className="pl-2">Linkedin</h5>
                </Link>
                <Link
                  className="flex items-center hover:text-gray-400 transition-all transform duration-300"
                  href=" https://www.instagram.com/miraii.studio/"
                >
                  <LiaYoutube size={24} />
                  <h5 className="pl-2">Youtube</h5>
                </Link>
              </div>
              <div className="flex"></div>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2024 Miraii Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
