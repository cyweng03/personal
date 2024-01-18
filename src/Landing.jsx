import React from "react";
import Navbar from "./components/Navbar";
import pic from "./img/IMG_0617.jpg";
import me from "./img/meh.jpeg";
import Top from "./components/Top";
import Projects from "./components/Projects";

const Landing = () => {
  return (
    <>
      <div>
        <Top />
      </div>
      <div>
        <section id="Home">
          <Navbar />
          <div className="h-screen">
            <div className="ml-[10%] py-[20%]">
              <div className="flex flex-row items-end mb-[5%]">
                <div className="text-5xl font-semibold ">
                  Hello, I'm <div className="text-7xl">Chu-Yin Weng</div>
                </div>
                <div className="ml-5 font-semibold text-3xl"> aka Dora</div>
              </div>
              <div className="font-semibold text-2xl mb-5">
                I’m a developer with a passion for building innovative
                solutions.
              </div>
              <div className="font-semibold text-2xl">
                Check out my projects below.
              </div>
            </div>
          </div>
        </section>

        <section id="Experiences">
          <div className="space-y-10">
            <div className="text-3xl font-semibold justify-center">
              Experiences & Projects
            </div>
            <div className="space-y-10">
              <Projects />
            </div>
          </div>
          <div className="text-lg mt-5 mb-2">
            {" "}
            {/* GitHub Link Section */}
            Want to see more? Check out my
            <a
              href="https://github.com/dorawengg"
              className="font-bold underline"
            >
              {" "}
              GitHub!
            </a>
          </div>
        </section>

        <section id="About" className="h-screen">
          <div className="h-[94%] items-center">
            <div className="py-[20%]">
              <div className="flex flex-row items-center">
                <div className="flex flex-col mr-10">
                  <div className="text-3xl font-semibold mt-5 mb-5">
                    Hey there, I'm Dora
                  </div>
                  <div className="text-lg mt-5 mb-2">
                    I am currently a student at Cornell University with a
                    passion for developing innovative software solutions.
                  </div>

                  <div className="text-lg mt-5 mb-2">
                    My passion for technology was influenced by my dad, who
                    works in the field. I am a team player and I am always
                    willing to learn new things. I am particularly interested in
                    web and backend development, and I am excited to explore the
                    potential of these technologies to solve real-world
                    problems.
                  </div>
                  <div className="text-lg mt-5 mb-2">
                    I'm inspired by people who use design to solve real-world
                    problems and make a positive impact on the world. If that
                    sounds like you,{" "}
                    <a
                      href="https://www.linkedin.com/in/chuyinweng/"
                      className="font-bold underline"
                    >
                      lets connect!
                    </a>
                  </div>
                </div>
                <img
                  src={me}
                  alt="Pic of me"
                  className="rounded-3xl object-cover w-1/3"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
