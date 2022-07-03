import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p style={{ textAlign: "center", color: "white" }}>
        Desenvolvido por: Diego Lopes &copy;
      </p>
      <span className="links">
        <a href="https://www.linkedin.com/in/diegodld" target="_blank">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.github.com/diegodld" target="_blank">
          <FaGithub size={20} />
        </a>
      </span>
    </footer>
  );
}
