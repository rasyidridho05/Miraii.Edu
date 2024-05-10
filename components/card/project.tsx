import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosPlay } from "react-icons/io";
import { GameType } from "@/type/game";

const Project = ({ thumbnail, title, desc, link }: GameType) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-none rounded-xl p-4 group bg-[#BCDDFF] bg-opacity-50 border-4 border-white hover:bg-[#1741B6] hover:bg-opacity-80 transition-all duration-300">
      <div className="">
        <Link href={`${link}`}>
          <div className="h-[280px] w-full relative rounded-lg overflow-hidden">
            <Image
              src={`/images/projects/${thumbnail}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              quality={100}
              alt="...loading"
              priority
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 cursor-pointer group-hover:opacity-0" />
          </div>
        </Link>
      </div>
      <div className=" p-4 flex flex-col justify-between rounded-b-lg ">
        <div className="pb-4">
          <h1 className="text-xl font-semibold mb-1 text-white">{title}</h1>
          <p className="text-gray-100 text-base ">{desc}</p>
        </div>
        <button className="bg-Azure500 w-fit text-white rounded-full py-2 px-4 group-hover:text-Azure500 group-hover:bg-white transition-all duration-300">
          {link && (
            <Link
              href={`${link}`}
              target="_blank"
            >
              <p className="flex gap-2 items-center text-sm font-semibold">
                Play Now <IoIosPlay />
              </p>
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Project;
