import React, { useState, useEffect } from "react";
import projects from "../projects.json";

const Projects = () => {
  return (
    <>
      {projects.Projects.map((project, index) => (
        <div key={index}>
          <div className="bg-[#F9F9F9] rounded-3xl p-10 flex flex-row justify-between space-x-5 shadow-lg hover:bg-[#F0E4D8] transition duration-300 ">
            <div>
              <div className="mb-10">
                <a
                  href={project.link} // Set the link destination
                  target="_blank" // Open the link in a new tab
                  rel="noopener noreferrer" // Security feature for opening new tabs
                  className="text-4xl font-bold"
                >
                  {project.name}
                </a>
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
      ))}
    </>
  );
};

export default Projects;
