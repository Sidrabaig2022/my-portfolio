import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("💖 Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setError(null);
      } else {
        setError(result.error || "Something went wrong! ❌");
        setSuccess(null);
      }
    } catch (err) {
      setError("❌ Network error! Check your server.");
      setSuccess(null);
    }
  };

  return (
    <section id="contact">
      <h2 className="glow-text">💌 Let's Connect & Create Something Beautiful 💌</h2>
      <p>Have an amazing idea? Let's bring it to life together! ✨</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" className="cta">Send Message</button>
      </form>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default Contact;
