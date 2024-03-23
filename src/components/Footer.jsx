import git from "../img/github.svg";
import linkedin from "../img/linkedin.svg";

const Footer = () => {
  return (
    <footer className=" text-[#f6f5f0] w-full ">
      <div className="flex flex-row justify-end items-center">

        <div className="flex flex-row items-center space-x-8 ">
          <a
            href="https://github.com/dorawengg"
            target="_blank"
          >
            <img src={git} alt="GitHub Logo" className="w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/chuyinweng/"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn Logo" className="w-full h-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
