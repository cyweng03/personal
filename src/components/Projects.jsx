import React, { useState, useRef } from "react";
import projects from "../projects.json";
import { useInView, motion } from "framer-motion";

const Project = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <div key={index} >
          <div className="bg-[#F9F9F9] rounded-3xl p-10 flex flex-row justify-between space-x-5 shadow-lg hover:bg-[#F0E4D8] transition duration-300 ">
            <div>
              <div className="mb-10">
                <div className="flex flex-row">
                  <a
                    href={project.link} // Set the link destination
                    target="_blank" // Open the link in a new tab
                    rel="noopener noreferrer" // Security feature for opening new tabs
                    className="text-4xl font-bold"
                  >
                    {project.name}
                  </a>
                  <p>&#8599;</p>
                </div>
                <div>{project.time}</div>
              </div>
              <div>{project.desription}</div>
            </div>

            <div className="space-y-2 text-right">
              {project.tools.map((tool, key) => (
                <div key={key}>{tool}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Projects = () => {
  return (
    <>
      {projects.Projects.map((project, index) => (
        <Project project={project} key={index} />

      ))}
    </>
  );
};

export default Projects;
