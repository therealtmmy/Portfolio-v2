import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Links = () => {
  return (
    <div className="text-[#b8b8b9] font-semibold pt-20 text-base leading-10">
      {" "}
      <NavLink
        className="flex flex-row gap-2"
        to="/"
        style={({ isActive }) => {
          return {
            gap: isActive ? "20px" : "0.5rem",
            color: isActive ? "white" : "#b8b8b9",
          };
        }}
      >
        <div className="border-b border-gray-500 w-10  my-5"></div>
        ABOUT
      </NavLink>
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <NavLink
          to="MyExperience"
          className="flex flex-row gap-2"
          style={({ isActive }) => {
            return {
              gap: isActive ? "20px" : "0.5rem",
              color: isActive ? "white" : "#b8b8b9",
            };
          }}
        >
          <div className="border-b border-gray-500 w-10  my-5"></div>
          EXPERIENCE
        </NavLink>
      </p>
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <NavLink
          to="Projects"
          className="flex flex-row gap-2"
          style={({ isActive }) => {
            return {
              gap: isActive ? "20px" : "0.5rem",
              color: isActive ? "white" : "#b8b8b9",
            };
          }}
        >
          <div className="border-b border-gray-500 w-10  my-5"></div>
          PROJECTS
        </NavLink>
      </p>
      <Outlet />
    </div>
  );
};

export default Links;
