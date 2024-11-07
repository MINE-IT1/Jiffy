import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  // Data for the service cards
  const servicesData = [
    {
      id: 1,
      title: "Workforce management service",
      description:
        "Arranged the source as per the client resource Jiffy’s Workforce Management Services excel at streamlining and enhancing employee-related tasks, including attendance and leave management, to improve organizational efficiency and productivity.",
      link: "/view-more",
    },
    {
      id: 2,
      title: "Workforce management service",
      description:
        "Arranged the source as per the client resource Jiffy’s Workforce Management Services excel at streamlining and enhancing employee-related tasks, including attendance and leave management, to improve organizational efficiency and productivity.",
      link: "/view-more",
    },
    {
      id: 3,
      title: "Workforce management service",
      description:
        "Arranged the source as per the client resource Jiffy’s Workforce Management Services excel at streamlining and enhancing employee-related tasks, including attendance and leave management, to improve organizational efficiency and productivity.",
      link: "/view-more",
    },
    {
      id: 4,
      title: "Workforce management service",
      description:
        "Arranged the source as per the client resource Jiffy’s Workforce Management Services excel at streamlining and enhancing employee-related tasks, including attendance and leave management, to improve organizational efficiency and productivity.",
      link: "/view-more",
    },
    {
      id: 5,
      title: "Workforce management service",
      description:
        "Arranged the source as per the client resource Jiffy’s Workforce Management Services excel at streamlining and enhancing employee-related tasks, including attendance and leave management, to improve organizational efficiency and productivity.",
      link: "/view-more",
    },
    {
      id: 6,
      title: "Workforce management service",
      description:
        "Arranged the source as per the client resource Jiffy’s Workforce Management Services excel at streamlining and enhancing employee-related tasks, including attendance and leave management, to improve organizational efficiency and productivity.",
      link: "/view-more",
    },
  ];

  return (
    <>
      <h1 className="text-center text-4xl font-roboto font-semibold bg-heading-gradient bg-clip-text text-transparent items-center mb-4">
        Services
      </h1>
      <div>
        <div className="flex justify-center items-center bg-features-gradient p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="relative w-full max-w-sm h-80 p-6 bg-white border border-[#C761B6] rounded-lg text-center overflow-hidden group"
              >
                {/* Initial Green Overlay */}
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg"></div>

                {/* Purple Overlay after Green */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500 ease-in-out rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10 group-hover:z-0">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#C761B6] rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-left text-gray-600 group-hover:text-gray transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* "View More" Button (Only on Hover, Centered) */}
                <NavLink
                  to={service.link}
                  className="absolute inset-0 m-auto h-10 w-32 bg-gradient-to-r from-purple-500 to-blue-500 text-gray font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20"
                >
                  View more
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
