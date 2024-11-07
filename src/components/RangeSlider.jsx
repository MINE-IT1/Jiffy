import React from "react";

function RangeSlider() {
  return (
    <div className="flex flex-col items-center space-y-4 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h2 className="text-center text-[#37474F] font-roboto font-medium text-[20px] sm:text-[23px] leading-[26.95px] w-full sm:w-[400px]">
        How many month users do you need?
      </h2>

      <div className="relative flex items-center w-full">
        {/* Concentric Ellipses on the Left (White overlapping with slider) */}
        <div className="relative -ml-[19px] w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center z-10">
          <div className="w-[24px] h-[24px] bg-[#232DC4] rounded-full"></div>
        </div>

        {/* Range Rectangle */}
        <div className="relative w-full sm:w-[605px] h-[27px] bg-[#C761B6] rounded-xl flex items-center ml-[-10px]">
          {/* Divider Lines with Labels */}
          <div className="absolute h-full border-2 border-[#232DC4] left-[10%]">
            <span className="absolute top-[40px] left-[-10px] text-[#37474F] font-roboto text-[16px] sm:text-[23px] font-medium">10k</span>
          </div>
          <div className="absolute h-full border-2 border-[#232DC4] left-[25%]">
            <span className="absolute top-[40px] left-[-10px] text-[#37474F] font-roboto text-[16px] sm:text-[23px] font-medium">25k</span>
          </div>
          <div className="absolute h-full border-2 border-[#232DC4] left-[40%]">
            <span className="absolute top-[40px] left-[-10px] text-[#37474F] font-roboto text-[16px] sm:text-[23px] font-medium">50k</span>
          </div>
          <div className="absolute h-full border-2 border-[#232DC4] left-[56%]">
            <span className="absolute top-[40px] left-[-10px] text-[#37474F] font-roboto text-[16px] sm:text-[23px] font-medium">100k</span>
          </div>
          <div className="absolute h-full border-2 border-[#232DC4] left-[72%]">
            <span className="absolute top-[40px] left-[-10px] text-[#37474F] font-roboto text-[16px] sm:text-[23px] font-medium">500k</span>
          </div>
          <div className="absolute h-full border-2  border-[#232DC4] right-[12%]">
            <span className="absolute top-[40px] left-[-10px] text-[#37474F] font-roboto text-[16px] sm:text-[23px] font-medium">1m</span>
          </div>
          <div className="absolute h-full border-2 border-transparent right-3">
            <span className="absolute top-[40px] text-[#37474F] font-roboto text-[16px] sm:text-[23px] font-medium">1m+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
