import React from "react";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { Link as LinkR } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaPhone, FaVoicemail } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(145deg,rgba(32, 32, 65, 0.9),rgb(12, 12, 22));
  color: #ffffff;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background: linear-gradient(45deg, #00ffff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    &.github { background: #333; color: white; }
    &.facebook { background: #1877f2; color: white; }
    &.linkedin { background: #0a66c2; color: white; }
    &.instagram { background: linear-gradient(45deg, #405de6, #833ab4, #c13584, #e1306c, #fd1d1d); color: white; }
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, #00ffff, #00ff88);
    }
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.75rem;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &:hover {
        color: white;
        transform: translateX(5px);
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoContainer>
          <NavLogo to="/">
            <DiCssdeck size="2.5rem" />
            <Span>Portfolio</Span>
          </NavLogo>
          
          <SocialMedia>
            <SocialIconLink 
              href="https://github.com/ihsansaif313" 
              target="_blank"
              className="github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink 
              href="https://github.com/ihsansaif313" 
              target="_blank"
              className="facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink 
              href="https://www.linkedin.com/in/its-saif-products/" 
              target="_blank"
              className="linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink 
              href="https://www.instagram.com/ihsansaif313/" 
              target="_blank"
              className="instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialMedia>
        </LogoContainer>

        <FooterSection>
          <h3>Get In Touch</h3>
          <ContactList>
            <li>
              <a href="tel:+923064500428">
                 {/* Replace with phone icon if available */}
                +92 306 4500428
              </a>
            </li>
            <li>
              <a href="mailto:ihsansaifedwardion@gmail.com">
                 {/* Replace with email icon if available */}
                Email to Ihsan Saif
              </a>
            </li>
          </ContactList>
        </FooterSection>

        {/* Add additional sections here if needed */}
      </FooterWrapper>

      <Copyright>
        <p>Copyright 2024-{currentYear} to Ihsan Saif - All Rights Reserved</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;