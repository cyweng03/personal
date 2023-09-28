import React from "react";
import { motion } from "framer-motion";

function Top() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-slate-100 text-black font-bold py-2 px-4 rounded-full hover:scale-110 z-40"
      >
        Back to Top
      </button>
    </motion.div>
  );
}

export default Top;
