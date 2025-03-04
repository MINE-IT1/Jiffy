import React from "react";
import amico from "../../assets/amico.svg";

const aboutUs = `Jiffy is a cutting-edge digital office platform that revolutionizes workplace management 
across all departments. With dedicated panels for HR, Accounts, Management, 
Project Managers, Team Leads, and Employees, Jiffy offers a comprehensive suite
of tools to streamline operations and enhance collaboration. From recruitment and
performance management to project oversight and task tracking, Jiffy's unified platform
simplifies workforce management. Features include real-time insights, leave management,
financial monitoring, task assignment, time tracking, and seamless communication channels
Whether it's managing projects, monitoring financial status, or facilitating team collaboration, 
Jiffy empowers businesses to optimize their operations, saving time and unlocking the true 
potential of their workforce.`;

const About = () => {
  return (
    <>
      <div className="font-roboto mt-12 relative px-4 md:px-8">
        <center className="bg-gradient-to-r from-pink-custom to-blue-custom bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider">
          About Us
        </center>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-8 p-4 mt-8 relative">
          <p className="tracking-wide leading-relaxed text-base md:text-lg text-[#37474F]">
            {aboutUs}
          </p>
          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C259B2] to-transparent blur-[100px]"></div>
            <div className="flex justify-center md:justify-end">
              <img src={amico} alt="Amico Illustration" className="w-3/4 md:w-[80%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
