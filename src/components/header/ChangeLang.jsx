import React from "react";
import { motion } from "framer-motion";

const ChangeLang = ({ open }) => {
  return (
    <>
      {open && (
        <motion.div
          className="change-lang"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <p>Uzbek</p>
          <p>English</p>
          <p>Russian</p>
        </motion.div>
      )}
    </>
  );
};

export default ChangeLang;
