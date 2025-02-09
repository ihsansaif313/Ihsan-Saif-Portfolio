import React from "react";
import "./ProductPage.css";
import cross_icon from "../../images/close-image.jpg";
import { AiFillGithub } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import styled from "styled-components";



// import { useParams } from "react-router-dom";
// import { projects } from "../../data/constants";

const DemoButton = styled.a`
  display: flex;
margin: 2px 5px;
text-decoration:none;
  align-items: center;
  justify-content: center;
  padding: -0.4em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

const ProductPage = ({ project, onClose }) => {
  // const { productId } = useParams();
  // const project = projects.find((proj) => proj.id === Number(productId));
  if (!project) return null;
  return (
    <div className="project-popup">
      <div className="project-popup-container">
        <div className="close-image">
          <img src={cross_icon} onClick={() => onClose()} alt="" />
        </div>
        <img src={project.image} alt="" />
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillGithub size={24} />
                      </a>
                    )}
                    {project.webapp && (
                      <DemoButton
                        href={project.webapp}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsFillPlayFill size={16} style={{ marginRight: "4px" }} />
                        Live Demo
                      </DemoButton>
                    )}
                  </div>


        <div className="product-page-title">
          <h2>{project.title}</h2>
          <p>{project.date}</p>
          <p className="description">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
