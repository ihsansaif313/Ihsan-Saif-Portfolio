import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Skills from "./components/Skills/Skills.jsx";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/product" element={<ProductPage />}>
              <Route path=":productId" element={<ProductPage />} />
            </Route>
          </Routes>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects />
        </Body>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
