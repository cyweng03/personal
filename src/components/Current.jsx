import React, { useState } from "react";

const Current = ({ img, paragraphContent, link }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="bg-white rounded-3xl p-[5%] h-80 flex hover:bg-[#F0E4D8] transition-all drop-shadow-lg"
      onMouseOver={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="w-[45%] font-semibold text-2xl text-black">
        {" "}
        Currently working on...
      </div>
      <div className="w-full flex items-center justify-end">
        {showContent ? (
          <div>
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
          <img
            src={img}
            alt="AguaClara Logo"
            className="object-contain h-[60%]"
          />
        )}
      </div>
    </div>
  );
};

export default Current;
