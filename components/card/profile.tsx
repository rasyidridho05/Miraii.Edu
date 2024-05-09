import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaInstagram, LiaLinkedin } from "react-icons/lia";

import { CreatorType } from "@/type/creator";

const Profile = ({
  photo,
  name,
  position,
  linkedin,
  username,
  instagram,
  title,
}: CreatorType) => {
  return (
    <div className="col-span-6 col-start-2 sm:col-span-4 md:col-span-3 bg-none rounded-xl p-4 group bg-Azure600">
      <div className="h-[260px] w-full relative rounded-t-lg overflow-hidden">
        <Image
          src={`/images/creator/${photo}`}
          blurDataURL={`/image/creator/${photo}`}
          className="transition-all duration-300 group-hover:scale-110"
          layout="fill"
          alt="..loading"
          objectFit="cover"
          quality={100}
        />
        <div className="bg-white blur-sm"/>
      </div>
      <div className="p-2 justify-between rounded-b-lg">
        <div className="pb-4 border-b-blue-300 border-b">
          <h1 className="text-xl font-semibold mb-1 text-white text-left">
            {name}
          </h1>
          <p className="font-normal text-sm leading-5 md:text-base text-blue-200 text-left">
            {position}
          </p>
        </div>
        <div className="pt-4 flex flex-col gap-2 w-full justify-center">
          {instagram && (
            <Link
              href={`${instagram}`}
              target="_blank"
              className="hover:text-white text-blue-200 transition-all duration-300 "
            >
              <p className="items-center text-base flex gap-1 ">
                <LiaInstagram size={28} /> {username}
              </p>
            </Link>
          )} 
          {linkedin && (
            <Link
              href={`${linkedin}`}
              target="_blank"
              className="hover:text-white text-blue-200 transition-all duration-300 "
            >
              <p className="items-center text-base flex gap-1">
                <LiaLinkedin size={28} /> {title}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
