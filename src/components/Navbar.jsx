import React from "react";

function Navbar() {
  const scrollTo = (sectionId) => {
    const sec = document.getElementById(sectionId);
    window.scrollTo({
      top: sec.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <a href="/#Home">
        <div className="font-bold text-xl">Dora Weng</div>
      </a>
      <ul className="nav-menu flex flex-row space-x-4">
        <li>
          <a onClick={() => scrollTo("About")} className="">
            About
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("Experiences")} className="">
            Experiences & Projects
          </a>
        </li>
        {/* <li>
          <a href="/Tutoring" className="text-black">
            Tutoring
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
