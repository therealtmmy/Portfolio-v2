import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Experience from "./ExperienceData";

const ExData = ({ data }) => (
  <>
    <div className="flex flex-row p-8 gap-[1px]">
      <div>
        <p className="w-40 font-medium">{data.dates}</p>
      </div>
      <div>
        <p className="text-white font-bold text-lg">{data.company}</p>
        <p className="mb-2 text-lg">{data.title}</p>
        <p className="w-[30em]">{data.responsibilities}</p>

        <div className="text-white flex flex-row gap-2 mt-6">
          <p className="bg-[#373738] p-2 rounded-full">{data.skills[0]}</p>
          <p className="bg-[#373738] p-2 rounded-full">{data.skills[1]}</p>
          <p className="bg-[#373738] p-2 rounded-full w-[60px] text-center">
            {data.skills[2]}
          </p>
          <p className="bg-[#373738] p-2 rounded-full">{data.skills[3]}</p>
        </div>
      </div>
    </div>
  </>
);

const MyExperience = () => {
  return (
    <div>
      {" "}
      <div className="absolute top-0 right-0 w-1/2 text-sm text-[#b8b8b9] pt-16 pr-48  bg-gray-900 h-screen overflow-auto">
        <div class>
          {Experience.map((data, index) => (
            <ExData data={data} {...data} key={index} />
          ))}
          <p className="text-white text-[18px] animate-bounce font-bold mt-14 ml-10 flex items-center gap-3 pb-10">
            View Full Resume <FaExternalLinkAlt />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
