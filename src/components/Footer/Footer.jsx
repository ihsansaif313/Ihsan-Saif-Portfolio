import React from "react";
import "./Footer.css";
import { DiCssdeck } from "react-icons/di";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Container">
      <div className="Wrapper">
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </NavLogo>

        <div className="SocialMedia">
          <a
            href="https://github.com/ihsansaif313"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon github" />
          </a>
          <a
            href="https://github.com/ihsansaif313"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="icon facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/its-saif-products/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a
            href="https://www.instagram.com/ihsansaif313/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="icon instagram" />
          </a>
        </div>

        <div className="footer-content">
          <h2>Get In Touch</h2>
          <ul>
            <li>
              <a href="tel:+923064500428">+92 306 4500428</a>
            </li>
            <li>
              <a
                href="mailto:ihsansaifedwardion@gmail.com"
                className="footer-gmail"
              >
                Email to Ihsan Saif
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>Copyright 2024-{currentYear} to Ihsan Saif - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;