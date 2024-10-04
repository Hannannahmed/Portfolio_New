import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const textMessages = [
  "React JS",
  "Developer",
  "React Native",
  "Developer"
];

const boxVariant = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, rotateY: 90, transition: { duration: 0.8 } },
};

const textVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
  exit: { y: -50, opacity: 0, transition: { duration: 0.5 } },
};

const RotatingBox: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    // Change text every 3 seconds
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % textMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
    <motion.div
      className="d-flex justify-content-center align-items-center mb-3 mt-3 flex-wrap">
      <motion.div
        className="rotating-box"
        style={{
          width: "250px",
          padding:"10px",
          height:"80px",
          background: "#583FBC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "40px",
          color: "#fff",
          textAlign: "center",
          fontSize: "28px",
          rotate:-5
        }}
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      
      >
        {/* Animated Text inside the rotating box */}
        <motion.div
          key={currentText}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {textMessages[currentText]}
        </motion.div>
      </motion.div>
    </motion.div>

        </div>
      </div>
    </div>
  );
};

export default RotatingBox;
