/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaCss3Alt, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { SiCplusplus, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mx-auto p-4">
      <h2 className="font-bold text-4xl text-center my-5">My Skills</h2>
      <p className="my-4 text-center">
        I'm not a perfect person who can do everything, but at least I have the
        following skills that I can offer
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="p-6 shadow-lg bg-black bg-opacity-60 flex flex-col gap-4">
          <FaPython size={60} />
          <p className="border-b-4 border-orange-500 font-bold text-2xl py-2">
            01. Python
          </p>
          <p className="text-lg">
            Python is still new to me and I'm still learning. but I have used it
            to solve some simple or basic algorithm problem. Python is commonly
            used for data analysis and data visualization
          </p>
        </div>
        <div className="p-6 shadow-lg bg-black bg-opacity-60 flex flex-col gap-4">
          <FaJava size={60} />
          <p className="border-b-4 border-orange-500 font-bold text-2xl py-2">
            02. Java
          </p>
          <p className="text-lg">
            Java is my secondary programming language. I have been used it for 4
            months and really good ad it. I solve some basic algorithm problem
            and try to make simple apps.
          </p>
        </div>
        <div className="p-6 shadow-lg bg-black bg-opacity-60 flex flex-col gap-4">
          <SiCplusplus size={60} />
          <p className="border-b-4 border-orange-500 font-bold text-2xl py-2">
            03. C/C++
          </p>
          <p className="text-lg">
            C and C++ are my primary languages. I've been using it for over a
            year and have gotten very good at it. I have solved many difficult
            algorithm problems with this language.
          </p>
        </div>
        <div className="p-6 shadow-lg bg-black bg-opacity-60 flex flex-col gap-4">
          <FaHtml5 size={60} />
          <p className="border-b-4 border-orange-500 font-bold text-2xl py-2">
            04. HTML
          </p>
          <p className="text-lg">
            Hypertext Markup Language or commonly abbreviated as HTML, I've
            learned it a few years ago. I use it to modify as well as create my
            own website. And now I learn it again to be advance on it.
          </p>
        </div>
        <div className="p-6 shadow-lg bg-black bg-opacity-60 flex flex-col gap-4">
          <FaCss3Alt size={60} />
          <p className="border-b-4 border-orange-500 font-bold text-2xl py-2">
            05. CSS
          </p>
          <p className="text-lg">
            Cascading Style Sheet or CSS, I've learned it a few years ago and
            now I'm learn it again in LBE Algorithms and Programming to develop
            my own website. Now you can see the result.
          </p>
        </div>
        <div className="p-6 shadow-lg bg-black bg-opacity-60 flex flex-col gap-4">
          <SiJavascript size={60} />
          <p className="border-b-4 border-orange-500 font-bold text-2xl py-2">
            06. JavaScript
          </p>
          <p className="text-lg">
            If we talk about HTML and CSS, it seems there is still something
            missing if we not include javascript. Yah, I usually use Javascript
            to make my website more interactive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
