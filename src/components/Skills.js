import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="glow-text">💅 My Skills & Services 🎨</h2>
      <p className="skills-text">
        Creating elegant and dynamic digital experiences with love, passion, and innovation. ✨  
        Here are the areas where I shine the brightest! 💖
      </p>

      <div className="skills-list">
        <motion.div className="skill-box" whileHover={{ scale: 1.1 }}>
          <h3>🌸 Web Development</h3>
          <p>Building responsive, elegant, and high-performance websites with React & Node.js.</p>
        </motion.div>

        <motion.div className="skill-box" whileHover={{ scale: 1.1 }}>
          <h3>🎀 UI/UX Design</h3>
          <p>Creating stunning, user-friendly, and interactive designs with Figma & Adobe XD.</p>
        </motion.div>

        <motion.div className="skill-box" whileHover={{ scale: 1.1 }}>
          <h3>💖 Frontend Magic</h3>
          <p>Animating interfaces with Framer Motion, CSS, and GSAP for immersive experiences.</p>
        </motion.div>

        <motion.div className="skill-box" whileHover={{ scale: 1.1 }}>
          <h3>🚀 Mobile App Development</h3>
          <p>Crafting beautiful cross-platform mobile apps with Flutter & React Native.</p>
        </motion.div>

        <motion.div className="skill-box" whileHover={{ scale: 1.1 }}>
          <h3>📱 Full-Stack Development</h3>
          <p>Building scalable and efficient backend APIs using Node.js, Express, and MongoDB.</p>
        </motion.div>

        <motion.div className="skill-box" whileHover={{ scale: 1.1 }}>
          <h3>🎬 Motion Graphics</h3>
          <p>Designing smooth, engaging animations with After Effects & Lottie.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
