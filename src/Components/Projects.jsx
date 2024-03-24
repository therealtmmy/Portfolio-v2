import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 w-1/2 text-sm text-[#b8b8b9] pt-20 pr-48">
        <div className="flex flex-row gap-[35px]">
          <img
            src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
            alt=""
            className="object-cover h-20 w-50"
          />
          <div>
            <p className="mb-2 text-lg font-bold text-white flex flex-row gap items-center gap-2">
              Build a Spotify Connected App <FaExternalLinkAlt />
            </p>
            <p className="w-[30em]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              consequuntur sunt nihil non quaerat? Itaque ab reprehenderit
              fugiat odio doloremque dolores, non cumque pariatur culpa
              quisquam, commodi numquam fugit optio deleniti quos animi eum.
              Doloribus nisi debitis doloremque magni. Maxime officiis autem id
              nihil dolorum excepturi soluta aut beatae?
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
          View Full Project Archive <FaExternalLinkAlt />
        </p>
      </div>
    </div>
  );
};

export default Projects;
