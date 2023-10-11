import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Social } from "./types";
import { AiOutlineMail } from "react-icons/ai";

export const socialmedias: Social[] = [
  {
    name: "Github",
    id: 0,
    component: <IoLogoGithub size={18} color={"#d3d3d3"} />,
  },
  {
    name: "Linkedin",
    id: 1,
    component: <IoLogoLinkedin size={18} color={"#d3d3d3"} />,
  },
  {
    name: "Email",
    id: 2,
    component: <AiOutlineMail size={18} color={"#d3d3d3"} />,
  },
];
