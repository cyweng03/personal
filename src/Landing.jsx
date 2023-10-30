import React from "react";
import Navbar from "./components/Navbar";
import pic from "./img/IMG_0617.jpg";
import AguaClara from "./img/AguaClaraLogo.webp";
import CirrusData from "./img/CirrusDataLogo.png";
import Research from "./img/ResearchLogo.png";
import Project from "./components/Project";
import Current from "./components/Current";
import Top from "./components/Top";
import glimpse from "./img/Glimpse.png";
import { useState, useEffect } from "react";

const Landing = () => {
  // const [lineHeight, setLineHeight] = useState("0%");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const totalHeight = document.body.scrollHeight - window.innerHeight;
  //     const percentageScrolled = (window.scrollY / totalHeight) * 100;
  //     setLineHeight(`${percentageScrolled}%`);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      {/* <div className="vertical-line" style={{ height: lineHeight }}></div> */}

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
              <div className="font-semibold text-2xl">
                Full-stack developer with a passion for building innovative
                solutions.
              </div>
            </div>
          </div>
        </section>

        <section id="Experiences">
          <div className="space-y-10">
            <div className="text-3xl font-semibold justify-center">
              Experiences & Projects
            </div>
            <div className="justify-center space-y-[5%] h-[80%]">
              <Current
                img={AguaClara}
                paragraphContent="I am currently working on a project to build a new website for my organization. 
            The goal of the project is to create a more appealing and engaging website that will attract more applicants and sponsors. 
            I am responsible for designing the new website, developing the interactive elements, and ensuring that the website has a 
            good user experience."
                link="https://github.com/AguaClara/webmaster"
              />

              <Current
                img={glimpse}
                paragraphContent="Glimpse is a website/app designed to make it easy for friends to stay connected and updated on each 
                other's lives. By signing up with your friend group, you will receive a monthly email with prompts about your lives. Simply 
                respond to the prompts and share any photos or videos you like. Friends can log into their accounts to view their memories 
                over time and customize prompts."
                link="https://github.com/JasonMun7/glimpse"
              />

              <div className="flex flex-row space-x-[8%] h-[45%]">
                <Project
                  img={CirrusData}
                  role="Intern"
                  time="June - August 2021"
                  paragraphContent="I assisted in the development of a cloud lab SaaS testbed environment, which 
              is a virtual environment that can be used to test and deploy cloud-based applications. I managed virtual machines, created 
              spreadsheets and diagrams of physical machines and cables, and helped to troubleshoot problems. This experience gave me the 
              opportunity to learn about cloud computing technologies and to gain experience in managing and troubleshooting virtual 
              machines."
                />
                <Project
                  className="overflow-y-auto"
                  img={Research}
                  time="January - April 2021"
                  role="Researcher"
                  paragraphContent="I am the sole author of a research paper published in an academic journal. In this 
              paper, I developed an image-based land-use classNameifier using transfer learning with a pre-trained ResNet-18 convolutional 
              neural network using PyTorch. I demonstrated the effectiveness of transfer learning for image classNameification by conducting 
              a comprehensive analysis of the resulting data. I identified key trends and insights from the data, and presented the results 
              in a clear and concise manner."
                  link="https://www.scirp.org/journal/paperinformation.aspx?paperid=119165"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="About" className="h-screen">
          <div className="h-[94%] items-center">
            <div className="py-[20%]">
              <div className="flex flex-row">
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
                    sounds like you,
                    <a
                      href="https://www.linkedin.com/in/chuyinweng/"
                      className="font-bold underline"
                    >
                      {" "}
                      lets connect!
                    </a>
                  </div>

                  {/* <div className="flex flex-row h-[8%] justify-center space-x-[20%] mt-[5%]"> 
                  <a href="https://www.linkedin.com/in/chuyinweng/">
                    <img src={linkedin} alt="linkedin" className="" />
                  </a>
                  <a>
                  <img src={email} alt="email" className="h-auto"/>
                  </a>
                </div> */}
                </div>
                <div className="flex ml-10">
                  <center>
                    <img src={pic} alt="Pic of me" className="rounded-full" />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
