import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import arrayOfProjects from "./AllProjectData";
import { useNavigate } from "react-router-dom";

const Projects = ({ data }) => (
  <>
    {" "}
    <div className="mt-5 flex flex-row gap-20 items-center">
      <span className="w-[1px]">{data.year}</span>
      <span className="w-[15em] font-bold text-white">{data.company}</span>

      <div className="text-white text-xs flex items-center w-[26em] font-semibold flex-row gap-2">
        <span className="bg-[#373738] p-2 rounded-full">
          {data.technologies[0]}
        </span>
        <span className="bg-[#373738] p-2 rounded-full">
          {data.technologies[1]}
        </span>
        <span className="bg-[#373738] p-2 rounded-full w-[60px] text-center">
          {data.technologies[2]}
        </span>
      </div>

      <span className="flex flex-row gap-2 items-center">
        <a href={data.link}>{data.linkName}</a>
        <FaExternalLinkAlt />
      </span>
    </div>
  </>
);

const AllProject = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-gray-900 overflow-auto pb-20">
      <div className="flex flex-col items-center pt-20 pr-[44.5em] text-lg text-[#b8b8b9] font-bold ">
        <p
          className="flex flex-row -ml-10 gap 1 items-center mb-2 cursor-pointer"
          onClick={() => {
            navigate("/Projects");
          }}
        >
          <IoIosArrowRoundBack /> Oluwatimilehin Esan
        </p>
        <h1 className="text-white  text-[44px] ">All Projects</h1>
      </div>

      <div className="flex flex-col items-center pt-20 ">
        <div className="border-red text-[#b8b8b9]">
          <div>
            <div className="flex sticky top-0 flex-row gap-20 text-white font-bold">
              <span className="w-[1px]">Year</span>
              <span className="w-[15em]">Project</span>
              <span className="w-[20em]">Built with</span>
              <span className="w-[5em] pr-60">Link</span>
            </div>
          </div>

          <hr class="border-t border-gray-500 w-6/5 mx-auto mt-3"></hr>

          {arrayOfProjects.map((data, index) => (
            <div>
              <Projects key={index} data={data} {...data} />
              <hr class="border-t border-gray-500 w-6/5 mx-auto mt-4"></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProject;
