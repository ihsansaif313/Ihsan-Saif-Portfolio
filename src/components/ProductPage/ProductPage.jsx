import React from "react";
import "./ProductPage.css";
import cross_icon from "../../images/close-image.jpg";
// import { useParams } from "react-router-dom";
// import { projects } from "../../data/constants";

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
