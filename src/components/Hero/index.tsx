import React from "react";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaUpwork } from "react-icons/fa6";
import RotatingBox from "../RotatingBox";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 1 },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const iconHover = {
  scale: 1.2,
  transition: { duration: 0.3 },
};

const Index: React.FC = () => {
  return (
    <motion.div
      className="container-fluid mt-5 hero-section d-flex flex-column justify-content-center align-items-center"
      style={{
        textAlign: "center",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Text */}
      <motion.div
        className="text-center"
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="display-3 fw-bold mb-3"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "calc(2rem + 1vw)" }} // Responsive font size
        >
          <span className="HeyText" style={{ color: "#0A63BC" }}>
            HEY!
          </span>{" "}
          I’m Abdul Hannan, Front End{" "}
          <div className="HeyText d-flex flex-column justify-content-center align-items-center gap-2" style={{ color: "#14A300", display: "inline-flex" }}>
  Engineer
  <div>
    <RotatingBox />
  </div>
</div>

        </motion.h1>
        <motion.p
          className="lead mb-1"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "calc(1.25rem + 0.5vw)" }} // Responsive font size
        >
          Delivering web solutions
        </motion.p>
        <motion.p
          className="lead mb-5"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "calc(1.25rem + 0.5vw)" }} // Responsive font size
        >
          that excel at solving your business problems.
        </motion.p>
      </motion.div>
      {/* Download Resume Button */}
      <motion.div className="mb-4" variants={item}>
        <motion.a
          href="/Hannan-Front-End-Developer.pdf"
          className="btn_Linkdin text-decoration-none"
          download="Abdul_Hannan_Ahmed_Resume.pdf"
          style={{
            backgroundColor: "#583FBC",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "inline-flex",
            alignItems: "center",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          Download Resume{" "}
          <FaCloudDownloadAlt size={20} style={{ marginLeft: "10px" }} />
        </motion.a>
      </motion.div>

      {/* Social Icons with Hover Effects */}
      <motion.div className="d-flex gap-5 justify-content-center" variants={container}>
        <motion.div
          className="iconHero"
          whileHover={iconHover}
          variants={item}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.linkedin.com/in/abdul-hannan-ahmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={45} color="#0A63BC" />
          </a>
        </motion.div>
        <motion.div
          className="iconHero"
          whileHover={iconHover}
          variants={item}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://github.com/Hannannahmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuGithub size={45} color="#242A41" />
          </a>
        </motion.div>
        <motion.div
          className="iconHero"
          whileHover={iconHover}
          variants={item}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.upwork.com/freelancers/abdulhannana?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaUpwork size={45} color="#14A300" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
