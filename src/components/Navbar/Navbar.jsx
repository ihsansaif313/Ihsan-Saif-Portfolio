import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
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

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    transition: all 0.3s ease;
    z-index: 1500;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  padding: 80px 30px;
  background: ${({ theme }) => theme.card_light + 'ee'};
  backdrop-filter: blur(10px);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const MobileMenuHeader = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.text_primary + '33'};
  margin-bottom: 30px;
  text-align: center;
`;

const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  list-style: none;
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 1.1rem;
  padding: 12px 20px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary + '15'};
    transform: translateX(5px);
  }
`;



const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 30px 0;
`;

const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.text_primary + '15'};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    background: ${({ color }) => color};
    color: white;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <div style={{ display: "flex", alignItems: "center" }}>
            <DiCssdeck size="3rem" color={theme.primary} />
            <Span>IHSAN SAIF</Span>
          </div>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>

        <MobileMenu isOpen={isOpen}>
          <CloseIcon onClick={() => setIsOpen(false)} />
          
          <MobileMenuHeader>
            <DiCssdeck size="3rem" color={theme.primary} />
            <h3 style={{ margin: "10px 0", color: theme.text_primary }}>IHSAN SAIF</h3>
          </MobileMenuHeader>

          <MobileMenuItems>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>
              Education
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </MobileLink>
          </MobileMenuItems>

          <SocialIcons>
            <SocialIconLink 
              href={Bio.linkedin} 
              target="_blank"
              onClick={() => setIsOpen(false)}
              style={{ '--hover-color': '#0A66C2' }}
            >
              <FaLinkedin size={24} />
            </SocialIconLink>
            
            <SocialIconLink 
              href={Bio.github} 
              target="_blank"
              onClick={() => setIsOpen(false)}
              style={{ '--hover-color': '#24292F' }}
            >
              <FaGithub size={24} />
            </SocialIconLink>
            
            <SocialIconLink 
              href={Bio.insta} 
              target="_blank"
              onClick={() => setIsOpen(false)}
              style={{ '--hover-color': '#E4405F' }}
            >
              <FaInstagram size={24} />
            </SocialIconLink>
            
            <SocialIconLink 
              href={Bio.facebook} 
              target="_blank"
              onClick={() => setIsOpen(false)}
              style={{ '--hover-color': '#1877F2' }}
            >
              <FaFacebook size={24} />
            </SocialIconLink>
          </SocialIcons>

      
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;