import React, { useEffect, useState, useRef } from "react";
import "./About.css";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Machine Learning Enthusiast",
  "Problem Solver",
  "Passionate Learner",
  "Programmer"
];

const About = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      setText(
        deleting
          ? current.substring(0, charIndex - 1)
          : current.substring(0, charIndex + 1)
      );

      setCharIndex(prev => (deleting ? prev - 1 : prev + 1));

      if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      }

      if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="about" id="ABOUT">
      <h2 className="about-title">About Me</h2>

      <div className="typewriter">
        <span>{text}</span>
        <span className="cursor">|</span>
      </div>

      <p className="about-subtext">
        Second year B.Tech CSAI Student at <span>Netaji Subhash University of Technology</span>  
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>Experience</h3>
          <p>
            AI/ML Intern <b>@ Springer Capital</b><br />
            Web Dev Intern <b>@ Vayumandal Innovation</b>
          </p>
        </div>

        <div className="about-card glow">
          <h3>Domains</h3>
          <p>
            <b>Frontend:</b> React, HTML, CSS, JS<br />
            <b>Backend:</b> Node.js, APIs<br />
            <b>AI:</b> ML, CV, DL, Langchain, Gradio<br />
            <b>Core:</b> DSA, OOPs, DBMS, CAO
          </p>
        </div>

        <div className="about-card">
          <h3>Toolbox and Languages</h3>
          <p>
            Python · C++ · JavaScript<br />
            Pandas · NumPy · Sklearn · TensorFlow<br />
            Git · Bootstrap · Hugging Face<br />

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


