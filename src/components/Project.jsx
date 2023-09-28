import React, { useState } from "react";

const Project = ({ img, role, time, paragraphContent, link }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="w-[55%] bg-white rounded-3xl p-6 hover:bg-slate-100 cursor-pointer transition-all drop-shadow-lg"
      onMouseOver={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="flex flex-row items-end">
        <div className="font-semibold text-2xl text-black mr-[2%]">
          {" "}
          {role}{" "}
        </div>
        <div className="text-base text-black mb-[2px]"> {time}</div>
      </div>
      <div className="w-full flex items-center justify-end h-[90%]">
        {showContent ? (
          <div className="h-40 overflow-auto">
            <div className="text-black">{paragraphContent}</div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <strong>Learn more</strong>
              </a>
            )}
          </div>
        ) : (
          <img src={img} alt="logo" className="object-contain w-[60%]" />
        )}
      </div>
    </div>
  );
};

export default Project;
