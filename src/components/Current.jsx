import React, { useState } from 'react';

const Current = ({ img, paragraphContent}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="bg-slate-300 rounded-3xl p-[5%] h-[45%] flex hover:bg-gray-600"
      onMouseOver={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="w-[45%] font-semibold text-2xl text-[#FFFFFF]"> Currently working on...</div>
      <div className="w-full flex items-center justify-end">
        {showContent ? (
          <div className="text-white">{paragraphContent}</div>
        ) : (
          <img src={img} alt="AguaClara Logo" className="object-contain h-[60%]" />
        )}
      </div>
    </div>
  );
}

export default Current;
