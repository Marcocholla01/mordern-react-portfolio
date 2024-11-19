import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiIonic,
  SiBootstrap,
  SiChakraui,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbBrandGolang, TbBrandReactNative } from "react-icons/tb";
import { DiNpm } from "react-icons/di";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      color: "#61DAFB",
      icon: <FaReact size={40} color="#61DAFB" />,
    },
    {
      name: "Node.js",
      color: "#689F63",
      icon: <FaNodeJs size={35} color="#689F63" />,
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: <SiJavascript size={30} color="#F7DF1E" />,
    },
    {
      name: "Go",
      color: "#00ADD8",
      icon: <TbBrandGolang size={35} color="#00ADD8" />,
    },
    {
      name: "VsCode",
      color: "#007ACC",
      icon: <VscVscode size={30} color="#007ACC" />,
    },
    {
      name: "HTML5",
      color: "#E34F26",
      icon: <FaHtml5 size={35} color="#E34F26" />,
    },
    {
      name: "CSS3",
      color: "#1572B6",
      icon: <FaCss3Alt size={35} color="#1572B6" />,
    },
    {
      name: "WordPress",
      color: "#21759B",
      icon: <FaWordpress size={40} color="#21759B" />,
    },
    {
      name: "Ionic",
      color: "#3880FF",
      icon: <SiIonic size={35} color="#3880FF" />,
    },
    {
      name: "Express.js",
      color: "#000000",
      icon: <SiExpress size={40} color="#000000" />,
    },
    {
      name: "MongoDB",
      color: "#47A248",
      icon: <SiMongodb size={35} color="#47A248" />,
    },
    {
      name: "Firebase",
      color: "#FFCA28",
      icon: <SiFirebase size={40} color="#FFCA28" />,
    },
    {
      name: "MySQL",
      color: "#4479A1",
      icon: <SiMysql size={40} color="#4479A1" />,
    },
    {
      name: "PostgreSQL",
      color: "#336791",
      icon: <SiPostgresql size={40} color="#336791" />,
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      icon: <SiTailwindcss size={40} color="#06B6D4" />,
    },
    {
      name: "npm",
      color: "#CB3837",
      icon: <DiNpm size={40} color="#CB3837" />,
    },
    {
      name: "PHP",
      color: "#777BB3",
      icon: <FaPhp size={40} color="#777BB3" />,
    },
    {
      name: "Bootstrap",
      color: "#7952B3",
      icon: <SiBootstrap size={40} color="#7952B3" />,
    },
    {
      name: "Chakra UI",
      color: "#319795",
      icon: <SiChakraui size={40} color="#319795" />,
    },
    {
      name: "React Native",
      color: "#61DAFB", // Official React Native color
      icon: <TbBrandReactNative size={40} color="#61DAFB" />,
    },
  ];

  return (
    <div className="techstack">
      <h2 className="techstack-title">My Tech Stack</h2>
      <div className="techstack-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
