import React from "react";
import { NavLink } from "react-router-dom";
import Services from "./About/services/Services";
import Mobile from "../assets/Rectangle.svg";
import handIcon from "../assets/handIcon.svg";
import QRScanner from "../assets/QrScanner.svg";
import DashboardView from "../assets/Dashboardview.svg";
import helpImg1 from "../assets/helpImg1.svg";
import helpImg2 from "../assets/helpImg2.svg";
import { FaQuoteLeft } from "react-icons/fa";
import Quote from "../assets/Quote.svg";

const Features = () => {
  const data = [
    {
      id: 1,
      name: "Client management",
      desc: "Arranged the source as per the client resource",
      link: "",
    },
    {
      id: 2,
      name: "Client management",
      desc: "Arranged the source as per the client resource",
      link: "",
    },
    {
      id: 3,
      name: "Client management",
      desc: "Arranged the source as per the client resource",
      link: "",
    },
    {
      id: 4,
      name: "Client management",
      desc: "Arranged the source as per the client resource",
      link: "",
    },
    {
      id: 5,
      name: "Client management",
      desc: "Arranged the source as per the client resource",
      link: "",
    },
    {
      id: 6,
      name: "Client management",
      desc: "Arranged the source as per the client resource",
      link: "",
    },
  ];

  const timeTaskData = [
    {
      id: 1,
      name: "Project management",
      desc: "View project detail & work process",
      link: "",
    },
    { id: 2, name: "Hr", desc: "View project detail & work process", link: "" },
    {
      id: 3,
      name: "Employee",
      desc: "View project detail & work process",
      link: "",
    },
  ];

  const paymentDesc = [
    {
      id: 1,
      icon: handIcon,
      desc: `Create your payment gateway infrastructure. You'll need a server to host your gateway, whether it's your own or via a third party. `,
    },
    { id: 2, icon: handIcon, desc: "Choose a payment processor. " },
    {
      id: 3,
      icon: handIcon,
      desc: "Create a customer relationship management (CRM) system.",
    },
    { id: 4, icon: handIcon, desc: "Implement security features. " },
    { id: 5, icon: handIcon, desc: "Obtain required certifications." },
  ];

  return (
    <>
      <div className={`font-roboto`}>
        <center>
          <h1
            className={`bg-clip-text text-4xl font-semibold text-transparent bg-custom-gradient mb-4`}
          >
            Features
          </h1>
        </center>
        <div className={`relative w-full h-full z-0`}>
          {/* Updated Background */}
          <div className="absolute inset-0 bg-features-gradient blur-[2px]">
            {/* Spread Dots */}
            <div className="greendots">
              <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm left-[2%] top-[10%] blur-2xl rounded-full"></span>
              <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm left-[8%] top-[78%] blur-2xl rounded-full"></span>
              <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm right-[2%] top-[8%] blur-2xl rounded-full"></span>
              <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm left-[42%] top-[40%] blur-2xl rounded-full"></span>
              <span className="absolute bg-[#35ECAF] z-10 h-24 w-24 shadow-sm right-[6%] top-[78%] blur-2xl rounded-full"></span>
            </div>
            <div
              className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-50 blur-[3px]"
              style={{ transform: "scale(1.5)" }}
            ></div>
            {/* Add more dot divs for a spread effect */}
          </div>

          <div
            className={`relative z-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center p-6`}
          >
            {data.map((items) => {
              return (
                <NavLink
                  key={items.id}
                  to={items.link}
                  className={`h-[250px] w-[300px] no-underline text-black p-4 m-2 transition duration-300 flex flex-col items-center justify-center hover:text-white hover:border-2  hover:bg-custom-gradient hover:rounded-lg`}
                >
                  <div className={`flex items-center gap-4`}>
                    <span className="border-2 border-black bg-[#D9D9D9] rounded-full h-10 w-10"></span>
                    <div>
                      <h2 className="text-xl">{items.name}</h2>
                    </div>
                  </div>
                  <p className={`ml-[5.2rem]   text-left`}>{items.desc}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/**   User-friendly, Task Time Tracking section */}

      <div className="task-time-main flex flex-col lg:flex-row justify-between items-center m-4 gap-8">
        <div className="w-full lg:w-[55%]">
          {/* Change heading color */}
          <h1 className="mt-8 m-4 text-4xl bg-heading-gradient h-24 bg-clip-text text-transparent capitalize font-bold lg:w-[350px] sm:w-[250px]">
            User-friendly, Task Time Tracking
          </h1>
          <p className="text-gray-700 capitalize ml-6 text-xl font-extralight tracking-wider">
            Manage Everything in one place
          </p>

          {/* Card Container */}
          <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
            {timeTaskData.map((items, index) => (
              <div
                key={index}
                className="p-6 m-6 border-l-4 border-solid border-r-0 border-b-0 border-t-0 border-[#BB5DB8] bg-white shadow-lg max-w-full h-[150px]"
              >
                <h2 className="text-lg font-semibold bg-heading-gradient bg-clip-text text-transparent">
                  {items.name}
                </h2>
                <p className="text-gray-700 font-semibold tracking-wide">
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-44">
          {/* Background Blur Effect */}
          <div className="relative">
            <div className="absolute h-96 w-72 rounded-full bg-[#35ECAF] blur-[390px] drop-shadow-lg top-36 right-[30%]"></div>
          </div>

          {/* Main Image */}
          <img
            src={Mobile}
            alt="Some image describing features"
            className="relative z-10 max-w-full"
          />
        </div>
      </div>

      {/** Payment gateway section */}
      <div className="flex flex-col lg:flex-row justify-around gap-4 flex-wrap m-4 mb-4">
        <div className="flex flex-col items-center lg:mr-4 mt-12">
          <div className="scanner">
            <div className="relative">
              <div className="absolute h-96 w-72  rounded-full bg-[#35ECAF] blur-[320px] drop-shadow-lg top-36 right-[30%]"></div>
            </div>

            <img src={QRScanner} alt="Payment Scanner" className="max-w-full" />
          </div>
          <NavLink
            to={`/getstarted`}
            className="bg-button-gradient cursor:pointer p-3 w-24 sm:w-32 mt-4 text-center no-underline text-white rounded-md font-semibold tracking-wide"
          >
            Start now
          </NavLink>
        </div>
        <div className="w-full lg:w-[35%] mt-10">
          <h1 className="bg-heading-gradient text-4xl bg-clip-text text-transparent capitalize font-bold w-[250px] sm:w-[350px]">
            User-friendly, Payment Gateway
          </h1>
          <p className="text-gray-700 tracking-wide">
            Manage Your payment easily
          </p>
          <div className="border-l-4 border-solid border-[#BB5DB8] border-r-0 border-t-0 border-b-0 mt-12">
            {paymentDesc.map((items) => (
              <div className="flex gap-2 items-center p-2">
                <img src={handIcon} alt="*" className="w-4 sm:w-5" />
                <p className="text-left text-gray-700 tracking-wide">
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/** User friendly dash boardview section */}
      <div className="task-time-main flex flex-col lg:flex-row justify-between items-center mt-4 ml-4 gap-4">
        <div>
          {/** Change heading color */}
          <h1 className="mt-8 m-4 text-4xl bg-heading-gradient bg-clip-text text-transparent capitalize font-bold w-[250px] sm:w-[300px]">
            User-friendly, Dashboard View
          </h1>
          <p className="text-gray-700 text-xl capitalize ml-4 font-extralight tracking-wider">
            Manage Everything in one place
          </p>
          <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px]">
            {timeTaskData.map((items) => (
              <div className="p-6 m-4 border-l-4 border-solid border-r-0 border-b-0 border-t-0 border-[#BB5DB8] bg-white shadow-lg max-w-full md:max-w-[550px] lg:max-w-[650px] rounded min-h-[220px] md:min-h-[240px] lg:min-h-[140px]">
                <h2 className="text-lg font-semibold bg-heading-gradient bg-clip-text text-transparent">
                  {items.name}
                </h2>
                <p className="text-gray-700 font-semibold tracking-wide">
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-44">
          {/* Background Blur Effect */}
          {/* <div className="absolute h-36 w-36 rounded-full bg-[#35ECAF] blur-[100px] drop-shadow-lg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div> */}
          <div className="relative">
            <div className="absolute h-96 w-72  rounded-full bg-[#35ECAF] blur-[350px] drop-shadow-lg top-36 right-[30%]"></div>
          </div>

          {/* Main Image */}
          <img
            src={DashboardView}
            alt="Some image describing features"
            className="relative z-10 max-w-full"
          />
        </div>
      </div>

      {/*Services Secton */}
      <div>
        <Services />
      </div>

      {/* Help section */}
      <div className="flex flex-col lg:flex-row justify-around gap-8 lg:gap-12 flex-wrap ml-4 mt-12 mb-12">
        <div className="flex flex-col items-center lg:mr-4 mt-12">
          <div className="help-images flex flex-wrap gap-4 mt-14 justify-center">
            <img
              src={helpImg1}
              alt=""
              className="max-w-full sm:max-w-[250px] lg:max-w-[300px] object-cover rounded-md"
            />
            <img
              src={helpImg2}
              alt=""
              className="max-w-full sm:max-w-[250px] lg:max-w-[300px] object-cover rounded-md"
            />
          </div>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative w-full">
            {/* Gradient covering only the left half */}
            <div className="absolute h-96 w-[50%] inset-y-0 blur-[130px] bg-quote-gradient overflow-hidden right-0"></div>
          </div>
          <h2 className="bg-heading-gradient bg-clip-text text-transparent capitalize font-bold text-xl sm:text-2xl lg:text-3xl mt-4">
            How we can help you?
          </h2>
          <p className="text-gray-700 tracking-wide text-base sm:text-lg lg:text-xl mt-2">
            Manage Your payment easily
          </p>
          <div className="border-l-4 border-solid border-[#BB5DB8] border-r-0 border-t-0 border-b-0 mt-4">
            {paymentDesc.map((items, index) => (
              <div key={index} className="flex gap-2 items-start p-4">
                <img src={handIcon} alt="*" className="w-4 sm:w-5 lg:w-6" />
                <p className="text-left text-gray-700 tracking-wide">
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/** Quote Section */}
      <div className="flex items-center justify-center bg-quote-gradient mt-4 p-4 sm:p-8">
        <div className="text-white w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[55%]">
          <div className="flex flex-col sm:flex-row items-start mb-4">
            <img
              src={Quote}
              alt="Quote Icon"
              className="mr-4 sm:mr-8 md:mr-16 mt-2 w-8 sm:w-10 md:w-12"
            />
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              We needed to be able to ramp up quickly and manage the process as
              fast as possible: ideally in around four weeks so we could honor
              the commitment we had made to the offices.
            </p>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-medium mt-4 sm:mt-0 sm:ml-12 md:ml-28">
            Gerry Conchar &mdash; Global Delivery Lead
            <br />
            Kellogg’s
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
