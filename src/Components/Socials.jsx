import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaSquareBehance,
} from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="text-[#b8b8b9] text-2xl flex flex-row gap-4 pt-20">
      <FaGithub className="hover:text-white" />
      <FaLinkedin className="hover:text-white" />
      <FaXTwitter className="hover:text-white" />
      <FaSquareBehance className="hover:text-white" />
    </div>
  );
};

export default Socials;
