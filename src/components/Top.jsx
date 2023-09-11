import React from 'react';

function Top() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-slate-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
    >
      Back to Top
    </button>
  );
}

export default Top;
