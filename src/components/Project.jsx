import React, { useState } from 'react';


const Project = ({ img, paragraphContent, link }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-[55%] bg-slate-300 rounded-3xl p-6 hover:bg-gray-600 cursor-pointer transition-all"
      onMouseOver={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="flex flex-row items-end">
        <div className="font-semibold text-2xl text-[#FFFFFF] mr-[2%]"> Intern </div>
        <div className="text-base text-[#FFFFFF] mb-[2px]"> June - Aug 2021</div>
      </div>
      <div className="w-full flex items-center justify-end h-[90%]">
        {showContent ? (
          <div>
            <div className="text-white">{paragraphContent}</div>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-white">
                Learn more
              </a>
            )}
          </div>
        ) : (
          <img src={img} alt="logo" className="object-contain w-[60%]" />
        )}
      </div>
    </div>
  );
}

export default Project;
