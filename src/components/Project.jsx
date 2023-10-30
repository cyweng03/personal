import React, { useState, useEffect } from "react";

const Project = ({ img, role, time, paragraphContent, link }) => {
  const [showContent, setShowContent] = useState(false);
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 698px)");

    setShowTime(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setShowTime(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className="w-[55%] bg-white rounded-3xl p-6 hover:bg-[#F0E4D8] cursor-pointer transition-all drop-shadow-lg h-80"
      onMouseOver={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="flex flex-row items-end">
        <div className="font-semibold text-2xl text-black mr-[2%]">{role}</div>
        <div className="text-base text-black mb-[2px]">
          {!showTime ? time : null}
        </div>
      </div>
      <div className="w-full flex items-center justify-end h-[90%]">
        {showContent ? (
          <div className="h-[90%]overflow-auto">
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
