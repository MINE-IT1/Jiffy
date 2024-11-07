import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const PlanCard = () => {
    const plansData = [
        {
            name: "Free Plan",
            description: "A full feature plan is for 15 days only, after that renewal is required.",
            price: "0",
            priceDetails: "/month",
            validity: "Free Forever",
            buttonText: "Try free",
            featuresTitle: "Free Plan Features",
            features: [
                "Dashboard",
                "Project management",
                "Task management",
                "Attendance Tracking",
                "Leave management",
                "Profile setting",
                "Timesheet & report",
                "Chat features",
                "Notification",
                "Calendar & event schedule",
                "Search functionality",
                "Mail integration",
                "Video meeting",
                "Employee location"
            ]
        },
        {
            name: "Basic Plan",
            description: "A full feature plan is for 15 days only, after that renewal is required.",
            price: "500",
            priceDetails: "/month",
            validity: "Billed Anually",
            buttonText: "Try free",
            featuresTitle: "Basic Plan Features",
            features: [
                "Dashboard",
                "Project management",
                "Task management",
                "Attendance Tracking",
                "Leave management",
                "Profile setting",
                "Timesheet & report",
                "Chat features",
                "Notification",
                "Calendar & event schedule",
                "Search functionality",
                "Mail integration",
                "Video meeting",
                "Employee location"
            ]
        },
        {
            name: "Pro Plan",
            description: "A full feature plan is for 15 days only, after that renewal is required.",
            price: "1500",
            priceDetails: "/month",
            validity: "Billed Anually",
            buttonText: "Try free",
            featuresTitle: "Pro Plan Features",
            features: [
                "Dashboard",
                "Project management",
                "Task management",
                "Attendance Tracking",
                "Leave management",
                "Profile setting",
                "Timesheet & report",
                "Chat features",
                "Notification",
                "Calendar & event schedule",
                "Search functionality",
                "Mail integration",
                "Video meeting",
                "Employee location"
            ]
        },
        {
            name: "Enterprise",
            description: "A full feature plan is for 15 days only, after that renewal is required.",
            price: "200",
            priceDetails: "/month",
            validity: "Billed Anually",
            buttonText: "Try free",
            featuresTitle: "Enterprise Plan Features",
            features: [
                "Dashboard",
                "Project management",
                "Task management",
                "Attendance Tracking",
                "Leave management",
                "Profile setting",
                "Timesheet & report",
                "Chat features",
                "Notification",
                "Calendar & event schedule",
                "Search functionality",
                "Mail integration",
                "Video meeting",
                "Employee location"
            ]
        }
    ];

    return (
        <div className="flex items-center justify-center mt-4 ml-12 font-roboto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-4 transition-all duration-300 ease-in-out">
                {plansData.map((plan, index) => (
                    <div
                        key={index}
                        className="group p-6 rounded-2xl border border-solid w-[85%] py-4 hover:bg-planpricehover-gradient hover:text-white transition-all duration-300 ease-in-out"
                        style={{ border: "0.5px solid #C761B6" }}
                    >
                        {/* Plan Header */}
                        <h2 className="font-medium text-3xl bg-plantext-gradient bg-clip-text text-transparent mb-2 text-left group-hover:text-white transition-colors duration-300 ease-in-out">{plan.name}</h2>
                        <p className="text-[0.95rem] text-medium capitalize text-[#37474F] mb-4 text-left group-hover:text-white transition-colors duration-300 ease-in-out">{plan.description}</p>

                        {/* Price and Validity */}
                        <div className="mb-4">
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold bg-planprice-gradient bg-clip-text text-transparent group-hover:text-white transition-colors duration-300 ease-in-out">
                                    ${plan.price}
                                </span>
                                <span className="text-lg text-gray-600 ml-1 group-hover:text-white transition-colors duration-300 ease-in-out">{plan.priceDetails}</span>
                            </div>
                            <span className="text-lg text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out">{plan.validity}</span>
                        </div>

                        {/* Button */}
                        <div className="mb-6">
                            <NavLink 
                                className="no-underline bg-planprice-gradient text-xl text-white font-medium py-3 px-10 rounded-md 
                                group-hover:bg-planbuttonehover-gradient group-hover:text-[#232DC4] transition-all duration-300 ease-in-out"
                            >
                                {plan.buttonText}
                            </NavLink>
                        </div>

                        {/* Features */}
                        <div className="flex items-center font-bold text-gray-600 mb-2 group-hover:text-white transition-colors duration-300 ease-in-out">
                            <FaHandPointRight className="text-purple-600 mr-2 text-2xl group-hover:text-white transition-colors duration-300 ease-in-out" />
                            <h3>{plan.featuresTitle}</h3>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-2 pl-6 text-left group-hover:text-white transition-colors duration-300 ease-in-out">
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center">
                                    <span className="mr-2 text-xl">•</span>
                                    <span className="text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlanCard;
