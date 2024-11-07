import React from "react";
import { NavLink } from "react-router-dom";
import pana from "../assets/images/pana.png";

function Contact() {
  return (
    <div className="relative bg-gradient-to-b mt-20 from-purple-100 to-pink-100 p-6 min-h-screen flex flex-col items-center justify-center lg:flex-row lg:space-x-6">
      {/* Contact Us Header */}
      <h1
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-800 font-roboto font-medium text-4xl lg:text-[40px] leading-[46.88px] w-[194px] h-[47px] opacity-100"
        style={{
          backgroundImage: "linear-gradient(90deg, #C760B6 0%, #232DC4 100%)",
        }}
      >
        Contact us
      </h1>

      {/* Left Side Form */}
      <div className="bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-2xl lg:w-[600px] w-full max-w-lg space-y-6 mt-24 lg:mt-14 p-8 lg:px-12">
        {/* Form Title */}
        <h2
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-800 font-roboto font-medium text-[28px] leading-[32.81px]"
          style={{
            backgroundImage: "linear-gradient(90deg, #C760B6 0%, #232DC4 100%)",
          }}
        >
          Let’s chat, Reach out <p>to us</p>
        </h2>

        {/* Form Subtitle */}
        <p className="text-[#37474F] font-roboto text-[18px] font-medium leading-[21.09px] text-left">
          Have a question or feedback? We are here to help. Send us a message,
          and we will reach out to you within 24 hrs.
        </p>

        {/* Divider Line */}
        <div className="border-t border-[#C761B6] mb-6 w-full"></div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* First Name and Last Name */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 font-roboto text-[18px] font-medium leading-[21.09px] text-left">First Name</label>
              <input
                type="text"
                className="p-2 w-full border rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] focus:ring focus:ring-purple-300 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 font-roboto text-[18px] font-medium leading-[21.09px] text-left">Last Name</label>
              <input
                type="text"
                className="p-2 w-full border rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] focus:ring focus:ring-purple-300 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1 font-roboto text-[18px] font-medium leading-[21.09px] text-left">Email</label>
            <input
              type="email"
              className="p-2 w-full lg:w-[415px] border rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] focus:ring focus:ring-purple-300 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1 font-roboto text-[18px] font-medium leading-[21.09px] text-left">Message</label>
            <textarea className="p-2 w-full lg:w-[415px] h-32 border rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] focus:ring focus:ring-purple-300 focus:outline-none" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-[415px] py-2 text-white font-semibold rounded-md bg-gradient-to-r from-pink-600 to-indigo-800 hover:from-indigo-800 hover:to-pink-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side Contact Info and Image */}
      <div className="flex flex-col items-center mt-auto lg:mt-0 lg:ml-8 space-y-6">
        {/* Image with Specific Dimensions and Negative Margin */}
        <div className="w-full max-w-[575.19px] h-[321.52px] flex justify-center items-center overflow-hidden -mt-4 lg:-mt-8">
          <img
            src={pana}
            alt="Contact illustration"
            className="object-contain w-full h-full"
          />
        </div>
        
        {/* Contact Information Box */}
        <div className="bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-2xl p-11 w-[545px] max-w-full flex flex-col justify-center space-y-8 ">
          {/* Email Section */}
          <div className="flex items-start space-x-4">
            {/* Circle Icon for Email */}
            <div className="w-[60px] h-[60px] bg-[#C761B6] rounded-full"></div>
            <div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#C760B6] to-[#232DC4] font-roboto text-[28px] font-medium leading-[32.81px]">
                Email
              </p>
              <p className="text-[#37474F] font-roboto text-[18px] font-medium leading-[21.09px]">
                Arunmathew@gmail.com
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-start space-x-4">
            {/* Circle Icon for Phone */}
            <div className="w-[60px] h-[60px] bg-[#C761B6] rounded-full"></div>
            <div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#C760B6] to-[#232DC4] font-roboto text-[28px] font-medium leading-[32.81px]">
                Phone
              </p>
              <p className="text-[#37474F] font-roboto text-[18px] font-medium leading-[21.09px]">
                1234567890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
