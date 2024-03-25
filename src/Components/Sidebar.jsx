import React from "react";
import Links from "./Links";
import Socials from "./Socials";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col pt-20 pl-24 fixed">
        <h1 className="text-white text-[48px] font-bold">
          Oluwatimilehin Esan
        </h1>
        <h3 className="text-white text-[23px]  font-medium">
          Junior Frontend Engineer
        </h3>
        <p className="text-[#b8b8b9] w-1/3 pt-4">
          I'm a motivated Front-End Developer passionate about creating
          exceptional user experiences and translating UI designs into
          pixel-perfect and accessible digital products for users.
        </p>

        <Links />
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
