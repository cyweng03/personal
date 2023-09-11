import React from 'react';

function Navbar() {
  return (
    // <nav>
    //   <ul className="flex flex-row space-x-4 justify-end">
    //     <li><a href="#Home" className="text-black">Home</a></li>
    //     <li><a href="#About" className="text-black">About</a></li>
    //     <li><a href="#Experiences" className="text-black">Experiences & Projects</a></li>
    //     <li><a href="#Tutoring" className="text-black">Tutoring</a></li>
    //   </ul>
    // </nav>
    <div className="flex flex-row justify-between items-center">
      <a href="/#Home">
        <div className="font-bold text-xl">Dora Weng</div>
      </a>
      <ul className="nav-menu flex flex-row space-x-4">
        <li><a href="/#About" className="text-black">About</a></li>
        <li><a href="/#Experiences" className="text-black">Experiences & Projects</a></li>
        <li><a href="/Tutoring" className="text-black">Tutoring</a></li>
      </ul>
    </div>
  );
}


export default Navbar;
