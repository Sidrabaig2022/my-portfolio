import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";

const App = () => {
  useEffect(() => {
    // Fetch projects from local backend
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => console.log("Projects:", data))
      .catch((error) => console.error("Error fetching projects:", error));

    // WebSocket setup
    const socket = new WebSocket("ws://localhost:5000/ws");

    socket.onopen = () => console.log("WebSocket connected");
    socket.onmessage = (event) => console.log("WebSocket message:", event.data);
    socket.onerror = (error) => console.error("WebSocket error:", error);
    socket.onclose = () => console.log("WebSocket disconnected");

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
