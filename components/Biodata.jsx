import React from "react";
import Image from "next/image";

const Biodata = () => {
  return (
    <div
      id="biodata"
      className="flex flex-col md:flex-row items-center justify-center my-5"
    >
      <div className="w-[300px] md:w-full lg:w-[600px] h-[300px] lg:h-[400px] relative border-8 border-gray-700 mx-auto hover:transition hover:scale-105 duration-300 hover:shadow-xl">
        <Image
          src="/profil.jpg"
          layout="fill"
          objectFit="cover"
          alt="profil image"
        ></Image>
      </div>
      <div className="p-4 flex flex-col items-start justify-start gap-4 md:gap-10">
        <h1 className="font-bold text-3xl">Mohamad Kholid Bughowi</h1>
        <p>
          An organized and self motivated human with the vision to collaborate
          the ideas with touch of detail and creativity. Possess the boldness to
          make decisions and to deal with the challenges to reach his goals and
          objectives.
        </p>
        <button className="py-2 px-2 bg-orange-600 text-bold rounded-md transition hover:bg-orange-400 duration-500">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Biodata;
