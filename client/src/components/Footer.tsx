import React from "react";
import { Github } from "lucide-react";
import { LinkedInCustomIcon, InstagramCustomIcon } from "./CustomSocialIcons";

export function Footer() {
  return (
    <footer className="dark-footer">
      <div className="footer-main-dark">
        <a className="footer-brand-dark" href="/" aria-label="CodeAI home">
          <img
            src={`${import.meta.env.BASE_URL}images/codeai-logo-white.png`}
            alt="CodeAI"
            className="footer-logo-dark"
          />
        </a>

        <p className="footer-address-dark">
          KJ Somaiya Institute of Technology<br />
          Sion — Mumbai 400 022
        </p>

        <div className="footer-links-dark">
          <a
            href="https://github.com/codeaikjsit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="footer-social-link"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/code-ai-kjsit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="footer-social-link"
          >
            <LinkedInCustomIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/codeai.kjsit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="footer-social-link"
          >
            <InstagramCustomIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="footer-bottom-dark">
        <span className="footer-copy-dark">© 2026 CodeAI student club</span>
        <span className="footer-status-dark">
          Computer Engineering · KJSIT <b className="footer-pulse">●</b>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
