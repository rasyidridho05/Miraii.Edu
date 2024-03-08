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
  instagram,
}: CreatorType) => {
  return (
    <div className="col-span-6 col-start-2 sm:col-span-4 md:col-span-3 bg-none rounded-xl p-4 group">
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
      </div>
      <div className="bg-gray-900 p-4 justify-between rounded-b-lg">
        <div className="pb-4 border-b-slate-400 border-b">
          <h1 className="text-xl font-medium mb-1 text-slate-200 text-center h-[48px]">
            {name}
          </h1>
          <p className="font-normal text-sm leading-5 md:text-base text-slate-300 text-center">
            {position}
          </p>
        </div>
        <div className="pt-4 flex gap-2 w-full justify-center">
          {instagram && (
            <Link
              href={`${instagram}`}
              target="_blank"
              className="hover:text-gray-400 transition-all duration-300 hover:scale-110 text-2xl"
            >
              <p className="items-center text-sm">
                <LiaInstagram size={28} />
              </p>
            </Link>
          )}
          {linkedin && (
            <Link
              href={`${linkedin}`}
              target="_blank"
              className="hover:text-gray-400 transition-all duration-300 hover:scale-110 text-2xl"
            >
              <p className="items-center text-sm">
                <LiaLinkedin size={28} />
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
