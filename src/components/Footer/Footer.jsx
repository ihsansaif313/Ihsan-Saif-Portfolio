import React from "react";
import "./Footer.css";
import { DiCssdeck } from "react-icons/di";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  AiFillTwitterCircle,
  FaInstagramSquare,
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
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Footer = () => {
  return (
    <div className="Container">
      <div className="Wrapper">
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20:",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <div className="SocialMedia">
          <a href="https://github.com/HamzaNisar929">
            <FaGithub className="icon github" />
          </a>
          <a href="">
            <FaFacebook className="icon facebook" />
          </a>
          <a href="">
            <FaLinkedin className="icon  linkedin" />
          </a>
          <a href="https://www.instagram.com/enigjes/?hl=en">
            <FaInstagramSquare className="icon instagram" />
          </a>
        </div>
        <div className="footer-content">
          <h2>Get In Touch</h2>
          <ul>
            <li>+93-330-9266-288</li>
            <li>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="footer-gmail"
              >
                tghamzaff@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>Copyright 2024 &#169; Portfolio.com - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
