import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="glow-text">💖 Welcome to My Magical Digital Universe 💖</h1>
      <p className="home-text">
        Step into a world where creativity shines, colors dance, and imagination has no limits. ✨  
        I craft digital experiences that are **beautiful, engaging, and unforgettable**.  
        Let's make magic together! 🚀💫
      </p>

      <motion.a href="#projects" className="cta" whileHover={{ scale: 1.1 }}>
        Explore My Creations ✨
      </motion.a>

      {/* Floating Orbs Animation for Aesthetic Effect */}
      
    </motion.section>
  );
};

export default Home;
