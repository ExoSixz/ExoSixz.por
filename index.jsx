import { motion } from "framer-motion";
import { useState } from "react";

export default function DynamicIslandMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="bg-black text-white rounded-full shadow-lg px-6 py-3 flex items-center justify-center cursor-pointer"
        animate={{ width: open ? 300 : 120 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <span className="text-sm font-medium">☰ Menu</span>
        ) : (
          <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#resume" className="hover:text-gray-300">Resume</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
