import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles.css";

const App = () => {
  // ✅ Dynamic API & WebSocket URLs based on environment
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api"
      : "https://my-portfolio-backend-production-6d68.up.railway.app/api";

  const WS_URL =
    process.env.NODE_ENV === "development"
      ? "ws://localhost:5000/ws"
      : "wss://my-portfolio-backend-production-6d68.up.railway.app/ws";

  useEffect(() => {
    // ✅ Fetch projects from correct backend URL
    fetch(`${API_URL}/projects`)
      .then((response) => response.json())
      .then((data) => console.log("Projects:", data))
      .catch((error) => console.error("Error fetching projects:", error));

    // ✅ WebSocket setup with correct URL
    const socket = new WebSocket(WS_URL);

    socket.onopen = () => console.log("✅ WebSocket connected");
    socket.onmessage = (event) => console.log("💬 WebSocket message:", event.data);
    socket.onerror = (error) => console.error("❌ WebSocket error:", error);
    socket.onclose = () => console.log("⚠️ WebSocket disconnected");

    return () => {
      socket.close();
    };
  }, [API_URL, WS_URL]);

  return (
    <Router>
      <Navbar />
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
