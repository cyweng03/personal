import React, { useState } from "react";

const Current = ({ img, paragraphContent }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="bg-white rounded-3xl p-[5%] h-80 flex hover:bg-slate-100 transition-all drop-shadow-lg"
      onMouseOver={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="w-[45%] font-semibold text-2xl text-black">
        {" "}
        Currently working on...
      </div>
      <div className="w-full flex items-center justify-end">
        {showContent ? (
          <div className="text-black">{paragraphContent}</div>
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
