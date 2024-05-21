import { DataContext } from "@/helpers/dataHelpers/dataProvider";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";

import "./Projects.scss";
import { ProjectsCardAnim } from "@/helpers/anim";
import { Pixelize } from "@/components/Pixelize/Pixelize";

export default function Projects() {
  const { data } = useContext(DataContext);

  return (
    <section className="container projects">
      <span className="small-text">Featured work</span>
      {data.map((currP, i) => (
        <ul key={`projects--${i}`}>
          <ProjectCard project={currP} />
        </ul>
      ))}
    </section>
  );
}

const startPixelsize = 80

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
  const [pixelSize, setPixelSize] = useState(startPixelsize);

  const { title1, title2, image } = project;

  const [firstTitle, setFirstTitle] = useState(title1);
  
  const handleActive = () => {
    setIsActive(true);

    
    setTimeout(() => {
      setPixelSize(startPixelsize / 1.5);
    }, 100);
    setTimeout(() => {
      setPixelSize(startPixelsize / 2.5);
    }, 200);
    setTimeout(() => {
      setPixelSize(startPixelsize / 3.5);
    }, 300);
    setTimeout(() => {
      setPixelSize(1);
    }, 400);
  };

  const handleClose = () => {
    setIsActive(false);
    setFirstTitle(title1)

    setTimeout(() => {
      setPixelSize(startPixelsize);
    }, 300);
  };

  return (
    <li
      onMouseEnter={() => handleActive()}
      onMouseLeave={() => handleClose()}
      className="project-card"
    >
      <motion.h1 className="super-text">{firstTitle}</motion.h1>
      <motion.div
        className="image-wrapper"
        variants={ProjectsCardAnim}
        animate={isActive ? "animate" : "exit"}
      >
        <Pixelize imageUrl={image} pixelSize={pixelSize} classes="image" />
      </motion.div>
      <motion.h1 className="super-text">{title2}</motion.h1>
    </li>
  );
};
