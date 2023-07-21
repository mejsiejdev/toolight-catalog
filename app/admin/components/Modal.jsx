"use client";

import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full fixed flex flex-col justify-center items-center inset-0 bg-black/20 min-h-screen"
    >
      <motion.div
        layout
        className="bg-white w-full max-w-md rounded-lg p-8 flex flex-col gap-4 shadow-lg"
      >
        <AnimatePresence>{children}</AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
