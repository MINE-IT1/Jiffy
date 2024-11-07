import React, { useState } from "react";
import logo from "../assets/images/Jiffy-logo.svg";
import fb from "../assets/images/facebook.svg";
import twitterlogo from "../assets/images/skill-icons_twitter.svg";
import linkedinlogo from "../assets/images/skill-icons_linkedin.svg";
import whatsapplogo from "../assets/images/whatsapp.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import websiteIcon from "../assets/images/website-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Submitted email:", email);
    // Here you could add additional functionality, like sending the email to an API endpoint
  };

  return (
    <div className="relative font-roboto text-white overflow-hidden">
      {/* White Section Above Footer */}
      <div className=" h-[100px] bg-white"></div>

      {/* Main Footer Container */}
      <div className="bg-gradient-to-r from-[rgba(35,45,196,0.64)] to-[rgba(199,96,182,0.8)] py-10  lg:px-20 flex flex-wrap justify-between items-start relative z-10">
        
        {/* Logo and Social Links */}
        <div className="mb-5" style={{ gap: '0px', opacity: '1' }}>
          <img src={logo} alt="Jiffy Logo" className="w-auto h-12 mb-4 -ml-[45px]" /> {/* Align logo above "Connect With Us" */}
          <p className="text-[22px] font-medium leading-[25.78px] text-left mb-3">Connect With Us</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <img src={whatsapplogo} alt="WhatsApp" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinlogo} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterlogo} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-5">
          <h3 className="font-semibold mb-4 text-[22px] font-medium leading-[25.78px]">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/features" className="hover:underline">Features</a></li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="mb-5">
          <h3 className="font-semibold mb-4 text-[22px] font-medium leading-[25.78px]">Contact</h3>
          <p className="text-sm">
            <span className="flex items-center mb-[10px]"> {/* Adjusted gap */}
              <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-2" />
              <a href="tel:9445409999" className="hover:underline">9445409999</a>
            </span>
            <span className="flex items-center mb-[10px]"> {/* Adjusted gap */}
              <img src={emailIcon} alt="Email" className="w-5 h-5 mr-2" />
              <a href="mailto:jiffy@yahoo.com" className="hover:underline">jiffy@yahoo.com</a>
            </span>
            <span className="flex items-center mb-[10px]"> {/* Adjusted gap */}
              <img src={websiteIcon} alt="Website" className="w-5 h-5 mr-2" />
              <a href="https://www.jiffy.co" target="_blank" rel="noopener noreferrer" className="hover:underline">www.jiffy.co</a>
            </span>
            <span className="flex items-center">
              <img src={addressIcon} alt="Address" className="w-5 h-5 mr-2" />
              3/52 Sanjeev Nagar, Bangalore-000000
            </span>
          </p>
        </div>

        {/* Newsletter */}
        <div className="mb-5">
          <h3 className="font-semibold mb-4 text-[22px] font-medium leading-[25.78px]">News letter</h3>
          <p className="text-sm mb-2">Enter your email and send</p>
          <p className="text-sm mb-5" style={{ width: '230px', height: '46px', opacity: '1' }}>Engage with us</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 bg-gray-200 rounded-l-md focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-t from-[#C760B6] to-[#232DC4] text-white px-4 py-2 rounded-r-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gradient-to-r from-[rgba(35,45,196,0.64)] to-[rgba(199,96,182,0.8)] text-center py-2 text-[22px] font-medium leading-[25.78px]">
        &copy; 2024 by Jiffy all rights Reserved
      </div>

      {/* Ellipse on the right side */}
      <div
        className="absolute w-[322.5px] h-[300px] opacity-80 bg-gradient-to-b from-[rgba(234,239,240,0.3)] to-[rgba(38,50,56,0.3)] rounded-full"
        style={{
          top: "-30px", // Adjusted to align with "Newsletter" and "Enter your email" text
          right: "-15px",
          backdropFilter: "blur(8px)",
          zIndex: "0",
        }}
      ></div>
    </div>
  );
};

export default Footer;
