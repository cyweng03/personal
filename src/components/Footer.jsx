import git from "../img/github.svg";
import linkedin from "../img/linkedin.svg";

const Footer = () => {
  return (
    <footer className=" text-[#f6f5f0] rounded-tl-3xl rounded-tr-3xl w-full">
      <div className="flex flex-row justify-between items-center py-16 px-12 sm:py-8">
        {/* <p className="text-white text-sm sm:text-xs mr-5">
          &copy; 2024 AguaClara Cornell
        </p> */}

        <div className="flex flex-row items-center space-x-8 ">
          <a
            href="https://github.com/AguaClara"
          >
            <img src={git} alt="GitHub Logo" className="w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/company/aguaclara-at-cornell/mycompany/"
          >
            <img src={linkedin} alt="LinkedIn Logo" className="w-full h-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
