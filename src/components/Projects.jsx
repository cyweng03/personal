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
                <div className="text-4xl font-bold">{project.name}</div>
                <div>{project.time}</div>
              </div>
              <div>{project.desription}</div>
            </div>

            <div className="space-y-2">
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
