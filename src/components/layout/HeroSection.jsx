import React from "react";
import wave from "../../assets/wave.jpeg";
import cuate from "../../assets/cuate.svg";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div
        className="flex items-center justify-center font-roboto h-screen w-full bg-cover bg-center bg-gradient-to-b from-pink-custom to-blue-custom"
        style={{
          backgroundImage: `url(${wave})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="greendots">
          <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm left-[25%] top-[26%] blur-2xl rounded-full"></span>
          <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm left-[40%] top-[58%] blur-2xl rounded-full"></span>
          <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm right-[10%] top-[15%] blur-2xl rounded-full"></span>
        </div>
        <div className="absolute top-0 w-full">
          <Header />
        </div>
        <div className="flex flex-col md:flex-row text-white font-roboto w-full px-4">
          <div className="flex justify-center mb-4 md:mb-0 w-full md:w-1/2">
            <img
              src={cuate}
              alt=""
              className="w-3/4 sm:w-1/2 md:w-full h-auto max-w-[300px] md:max-w-[500px]"
            />
          </div>
          <div className="flex flex-col items-start md:items-center cursor-default gap-4">
            <h1 className="text-[8vw] md:text-[60px] font-light leading-[10vw] md:leading-[70.31px] text-left w-full md:w-[410px] h-auto -translate-x-2 hover:text-green-400">
              Transforming{" "}
              <span className="hover:bg-gradient-to-b from-pink-custom to-blue-custom hover:bg-clip-text hover:text-transparent">
                Time Into Value
              </span>
            </h1>
            <p className="text-[4vw] md:text-base lg:ml-[-4.7rem]">
              Powered By Merry’s Infotech New Gen Educare
            </p>
            <div className="flex justify-center w-full">
              <NavLink
                to={"/getstarted"}
                className="border p-2 rounded-xl font-medium tracking-wider text-center text-[4vw] md:text-base hover:bg-gradient-to-b from-pink-custom to-blue-custom"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center font-roboto gap-2">
      <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-[#C259B2] to-transparent blur-[130px] w-1/2 mt-[60%]"></div>
        <div>
          <h1 className="bg-gradient-to-r h-16 from-pink-custom to-blue-custom bg-clip-text text-transparent text-[3rem] font-medium leading-[46.88px] text-center">
            A Smarter Way to Manage Your Work
          </h1>
        </div>
        <div>
          <p className="text-[#37474F] tracking-wide capitalize text-xl">
            Make your work Enhance the product activity and do your work
          </p>
        </div>
        <div className="flex gap-8">
          {[
            "Management",
            "Human Resources",
            "Business/sales",
            "Project",
            "Finance",
          ].map((option) => (
            <div
              className="flex justify-center items-center gap-2 text-2xl font-semibold tracking-wider"
              key={option}
            >
              <input
                type="radio"
                name="management"
                id={option}
                disabled
                className="h-5 w-5 border-2 border-pink-500 bg-pink-500  rounded-full focus:ring-pink-300"
              />
              <label
                htmlFor={option}
                className="bg-gradient-to-r from-pink-custom to-blue-custom bg-clip-text text-transparent"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
