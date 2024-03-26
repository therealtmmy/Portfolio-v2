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
      <a href="https://github.com/therealtmmy/" target="blank">
        {" "}
        <FaGithub className="hover:text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/timmi-esan-32a66a157/"
        target="blank"
      >
        <FaLinkedin className="hover:text-white" />
      </a>
      <a href="https://twitter.com/therealtmmy" target="blank">
        <FaXTwitter className="hover:text-white" />{" "}
      </a>
      <a href="https://www.behance.net/oluwatiesan" target="blank">
        <FaSquareBehance className="hover:text-white" />{" "}
      </a>
    </div>
  );
};

export default Socials;
