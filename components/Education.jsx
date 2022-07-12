import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="my-4 p-4 flex flex-col md:flex-row justify-center gap-8 md:gap-2"
    >
      <div className="flex-1">
        <h2 className="font-bold text-3xl py-1 mb-5 w-fit border-b-4 border-orange-400 mx-auto">
          Education
        </h2>
        <div className="flex flex-col justify-center gap-2">
          <div className="bg-orange-600 p-4 rounded-xl">
            <p className="text-lg bg-slate-800 px-2 py-1 w-fit rounded-lg">
              2020 - NOW
            </p>
            <p className="font-bold text-xl my-2">
              Institut Teknologi Sepuluh Nopember
            </p>
            <p>Undergraduate student of Informatics Engineering</p>
          </div>
          <div className="bg-orange-600 p-4 rounded-xl">
            <p className="text-lg bg-slate-800 px-2 py-1 w-fit rounded-lg">
              2017 - 2020
            </p>
            <p className="font-bold text-xl my-2">SMA N 1 Welahan Jepara</p>
            <p>Majoring in Mathematic and Science</p>
          </div>
          <div className="bg-orange-600 p-4 rounded-xl">
            <p className="text-lg bg-slate-800 px-2 py-1 w-fit rounded-lg">
              2014 - 2017
            </p>
            <p className="font-bold text-xl my-2">SMP N 1 Welahan Jepara</p>
            <p>Student in superior class</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-3xl py-1 mb-5 w-fit border-b-4 border-orange-400 mx-auto">
          Organization
        </h2>
        <div className="flex flex-col justify-center gap-2">
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-lg bg-orange-700 px-2 py-1 w-fit rounded-lg">
              2021 - NOW
            </p>
            <p className="font-bold text-xl my-2">
              Kesatria Sepuluh Nopember ITS
            </p>
            <p>Publication stass at Tim Kawal PKM ITS</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-lg bg-orange-700 px-2 py-1 w-fit rounded-lg">
              2022 - NOW
            </p>
            <p className="font-bold text-xl my-2">
              Himpunan Mahasiswa Teknik Computer-Informatika
            </p>
            <p>Staff KDPM (Kaderisasi dan Pemetaan Mahasiswa)</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-lg bg-orange-700 px-2 py-1 w-fit rounded-lg">
              2021 - NOW
            </p>
            <p className="font-bold text-xl my-2">
              Google Developer Student Club - ITS
            </p>
            <p>Member GDSC ITS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
