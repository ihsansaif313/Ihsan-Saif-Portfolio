import React, { useState } from "react";
import styled from "styled-components";
import ProjectCards from "../Cards/ProjectCards.jsx";
import { projects } from "../../data/constants.js";
import ProductPage from "../ProductPage/ProductPage.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  font-size:16px;
  font-weight:500;
  margin 22px 0;
  border-radius:10px;

  @media (max-width:768px){
  font-size:12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, some of them are following
        </Desc>

        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          )}
           <Divider />
          {toggle === "html css javascript" ? (
            <ToggleButton active onClick={() => setToggle("html css javascript")}>
              HTML , CSS & JAVA SCRIPT
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("html css javascript")}>
              HTML , CSS & JAVA SCRIPT
            </ToggleButton>
          )}
          <Divider />
          {toggle === "react" ? (
            <ToggleButton active onClick={() => setToggle("react")}>
              REACT
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("react")}>
              REACT
            </ToggleButton>
          )}
          
         
        </ToggleGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <div key={project.id} onClick={() => handleCardClick(project)}>
                <ProjectCards project={project} />
              </div>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => {
              return (
                <div key={project.id} onClick={() => handleCardClick(project)}>
                  <ProjectCards project={project} />
                </div>
              );
            })}
          ;
        </CardContainer>

        {selectedProject && (
          <ProductPage project={selectedProject} onClose={closePopup} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
