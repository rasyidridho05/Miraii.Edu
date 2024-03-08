import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { GameType } from "@/type/game";

const Project = ({ thumbnail, title, desc, link }: GameType) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-none rounded-xl p-4 group">
      <div>
        <Link href={`${link}`}>
          <div className="h-[200px] w-full relative rounded-lg overflow-hidden">
            <Image
              src={`/images/projects/${thumbnail}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              quality={100}
              alt="...loading"
              priority
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900/50 transition-all duration-300 cursor-pointer group-hover:opacity-0" />
          </div>
        </Link>
      </div>
      <div className="bg-gray-900 p-4 flex flex-col justify-between rounded-b-lg ">
        <div className="pb-4">
          <h1 className="text-xl font-medium mb-1 text-slate-200">{title}</h1>
          <p className="text-slate-400 text-base">{desc}</p>
        </div>
        <div className="">
          {link && (
            <Link
              href={`${link}`}
              target="_blank"
              className="hover:text-gray-400 transition-all duration-300 hover:scale-110 text-2xl"
            >
              <p className="flex items-center text-sm">
                Play <IoIosArrowForward />
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
