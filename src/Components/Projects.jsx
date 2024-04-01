import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectsData from "./ProjectsData";
import { useNavigate } from "react-router-dom";

const Project = ({ data }) => (
  <>
    {" "}
    <div className="flex flex-row gap-[35px] p-8 hover:bg-[#b8b8b9]/5 hover:rounded hover:w-[45em]">
      <img src={data.img} alt="ProjectAvi" className="object-cover h-20 w-30" />
      <div>
        <p className="mb-2 text-lg font-bold text-white flex flex-row gap items-center gap-2">
          {data.projectName} <FaExternalLinkAlt />
        </p>
        <p className="w-[28em]  text-[#a0a0a2] leading-6 font-medium">
          {data.description}
        </p>

        <div className="text-white flex flex-row gap-2 mt-6">
          <p className="bg-[#373738] p-2 rounded-full">{data.skills[0]}</p>
          <p className="bg-[#373738] p-2 rounded-full">{data.skills[1]}</p>
          <p className="bg-[#373738] p-2 rounded-full w-[60px] text-center">
            {data.skills[2]}
          </p>
          {data.skills[3] && (
            <p className="bg-[#373738] p-2 rounded-full">{data.skills[3]}</p>
          )}
        </div>
      </div>
    </div>
  </>
);

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="absolute  top-0 right-0 w-1/2 text-sm text-[#b8b8b9] pt-16 bg-gray-900 h-screen overflow-auto pb-10 scrollbar">
        {ProjectsData.map((data, index) => (
          <Project key={index} data={data} {...data} />
        ))}
        <p
          className="text-white text-[18px] animate-bounce  ml-10 font-bold mt-14 flex items-center gap-3 cursor-pointer "
          onClick={() => {
            navigate("/AllProjects");
          }}
        >
          <span>View Full Project Archive</span> <FaExternalLinkAlt />
        </p>
      </div>
    </div>
  );
};

export default Projects;
