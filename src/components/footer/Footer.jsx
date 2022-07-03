import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p
        style={{ textAlign: "center", color: "white", marginRight: "0.25rem" }}
      >
        Desenvolvido por: Diego Lopes &copy;
      </p>
      <span className="links">
        <a href="https://www.linkedin.com/in/diegodld" target="_blank">
          <FaLinkedin size={16} />
        </a>
        <a href="https://www.github.com/diegodld" target="_blank">
          <FaGithub size={16} />
        </a>
      </span>
    </footer>
  );
}
