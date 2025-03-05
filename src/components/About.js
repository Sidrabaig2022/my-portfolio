import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="glow-text">🎀 About Me 🎀</h2>
      <p className="about-text">
        "Creativity is the sparkle of life!" ✨ I’m a passionate developer and designer,  
        crafting elegant digital experiences with love and style. 💕  
        With a heart full of creativity and a mind driven by innovation, I transform ideas into  
        dazzling digital art, ensuring every pixel is perfect. 🚀💖
      </p>

      <div className="about-details">
        <motion.div 
          className="about-box" 
          whileHover={{ scale: 1.05 }}
        >
          <h3>💻 Tech Enthusiast</h3>
          <p>Passionate about React, Node.js, and creating futuristic UI/UX experiences.</p>
        </motion.div>

        <motion.div 
          className="about-box" 
          whileHover={{ scale: 1.05 }}
        >
          <h3>🎨 UI/UX Designer</h3>
          <p>Transforming concepts into visually stunning and interactive designs.</p>
        </motion.div>

        <motion.div 
          className="about-box" 
          whileHover={{ scale: 1.05 }}
        >
          <h3>🚀 Dreamer & Creator</h3>
          <p>Building magical experiences that captivate and inspire.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
