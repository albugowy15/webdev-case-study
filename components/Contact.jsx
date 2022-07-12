import React from "react";

const Contact = () => {
  return (
    <div className="p-4 rounded-lg bg- bg-gray-800">
      <h2 className="font-bold text-3xl border-b-4 border-orange-500 mx-auto py-1 w-fit">
        Contact Me
      </h2>
      <p className="py-4 text-center">
        If you have something to ask or just want to know more about me, Fell
        free to contact me
      </p>
      <div className="flex flex-col gap-1 items-center justify-center text-center">
        <p>
          <span className="text-orange-500 font-bold">Email</span> :
          kholidbughowi@gmail.com
        </p>
        <p>
          <span className="text-orange-500 font-bold">Address</span> :
          Brondongan Street, Bugo, Welahan, Jepara, Central Java (59464)
        </p>
        <p>
          <span className="text-orange-500 font-bold">Phone</span> :
          0895-3284-94336
        </p>
      </div>
    </div>
  );
};

export default Contact;
