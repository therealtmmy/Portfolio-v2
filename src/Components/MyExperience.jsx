import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Experience from "./ExperienceData";

// const MyExperience = () => <></>;

const MyExperience = () => {
  return (
    <div>
      {" "}
      <div className="absolute top-0 right-0 w-1/2 text-sm text-[#b8b8b9] pt-20 pr-48">
        <div className="flex flex-row gap-[1px]">
          <div>
            <p className="w-40 font-medium">JULY - PRESENT</p>
          </div>
          <div>
            <p className="text-white font-bold text-lg">Apple Store</p>
            <p className="mb-2 text-lg">Senior Frontend Engineer</p>
            <p className="w-[30em]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dignissimos veritatis beatae tenetur, id molestiae ullam, suscipit
              nostrum fugiat vitae voluptas at vel, officia magni similique
              eveniet nesciunt unde? Nostrum cum obcaecati possimus fuga
              dignissimos quasi recusandae expedita, debitis reprehenderit?
            </p>

            <div className="text-white flex flex-row gap-2 mt-6">
              <p className="bg-[#373738] p-2 rounded-full">Javascript</p>
              <p className="bg-[#373738] p-2 rounded-full">TypeScript</p>
              <p className="bg-[#373738] p-2 rounded-full w-[60px] text-center">
                React
              </p>
              <p className="bg-[#373738] p-2 rounded-full">Storybook</p>
            </div>
          </div>
        </div>
        <p className="text-white text-lg font-bold mt-14 flex items-center gap-3">
          View Full Resume <FaExternalLinkAlt />{" "}
        </p>
      </div>
    </div>
  );
};

export default MyExperience;
