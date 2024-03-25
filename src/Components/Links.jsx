import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Links = () => {
  return (
    <div className="text-[#b8b8b9] font-semibold pt-20 text-base leading-10">
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <div className="border-b border-gray-500 w-10 hover:w-20 my-5"></div>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          ABOUT
        </NavLink>
      </p>
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <div className="border-b border-gray-500 w-10 hover:w-20 my-5"></div>
        <NavLink
          to="MyExperience"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          EXPERIENCE
        </NavLink>
      </p>
      <p className=" hover:text-white flex flex-row gap-2">
        {" "}
        <div className="border-b border-gray-500 w-10 hover:w-20 my-5"></div>
        <NavLink
          to="Projects"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          PROJECTS
        </NavLink>
      </p>

      <Outlet />
    </div>
  );
};

{
  /* <NavLink
className="button"
to={value.link}
style={({ isActive }) => {
  return { backgroundColor: isActive ? "#509CDB" : "#152259" };
}}
key={index}
>
{React.createElement(value.icon, { style: { fontSize: "19px" } })}{" "}
{value.name}
</NavLink> */
}

export default Links;
