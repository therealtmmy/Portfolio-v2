import React from "react";

const Links = () => {
  return (
    <div className="text-[#b8b8b9] font-semibold pt-20 text-base leading-10">
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <div className="border-b border-gray-500 w-10 hover:w-20 my-5"></div>
        ABOUT
      </p>
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <div className="border-b border-gray-500 w-10 hover:w-20 my-5"></div>
        EXPERIENCE
      </p>
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <div className="border-b border-gray-500 w-10 hover:w-20 my-5"></div>
        PROJECTS
      </p>
    </div>
  );
};

export default Links;
