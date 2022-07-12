import React from "react";
import Image from "next/image";

const Biodata = () => {
  return (
    <div id="biodata" className="flex flex-col md:flex-row items-center my-5">
      <div className="w-[300px] md:w-full h-[300px] lg:h-[400px] relative border-8 border-gray-700 mx-auto">
        <Image
          src="/profil.jpg"
          layout="fill"
          objectFit="cover"
          alt="profil image"
        ></Image>
      </div>
      <div className="p-4 flex flex-col items-start justify-start gap-4">
        <h1 className="font-bold text-3xl">Mohamad Kholid Bughowi</h1>
        <p>
          An organized and self motivated human with the vision to collaborate
          the ideas with touch of detail and creativity. Possess the boldness to
          make decisions and to deal with the challenges to reach his goals and
          objectives.
        </p>
      </div>
    </div>
  );
};

export default Biodata;
