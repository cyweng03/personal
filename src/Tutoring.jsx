import React from 'react';
import Navbar from './components/Navbar';

const Tutoring = () => {
  return (
    <div>
      <div> 
        <Navbar />
      </div>
      <h1 className="text-5xl font-semibold mt-[5%] mb-[5%]">My Tutoring Experiences</h1>
      <div className="pr-[5%]">
        I am currently a college student majoring in computer science, and I have been tutoring for over 7 years.
        I have experience teaching a variety of subjects through different opportunities. 
        Through Theta Math Club, I taught kids AMC. Through X-Robotx LLC, I taught students with special needs block programming.
        In my free time, I also tutored students a variety of topics including AP Computer Science, Python, SHSAT Math, and SAT. 
      </div>
      {/* https://thetamathclub.wixsite.com/thetamath */}
      {/* <div className = "mt-[2%]"><a href="https://thetamathclub.wixsite.com/thetamath">Theta Math</a></div>
       */}
      <div className="text-3xl font-semibold mt-[5%] mb-[2%]">My availability</div>
      <div> For further inquiries, please email me at cyweng03@gmail.com or message me at (516)-816-6836</div>

    </div>
  );
};

export default Tutoring;
