import React from "react";
import "./button.style.css";

const CustomButton = ({ title }) => {
  const redirectToNemoInsta = () => {
    window.open(
      "https://www.instagram.com/steakhaus_eldorado/?hl=de",
      "_blank"
    );
  };
  return (
    <div className="custom-btn-center">
      <button className="btn" onClick={() => redirectToNemoInsta()}>
        <svg
          width="180px"
          height="60px"
          viewBox="0 0 180 60"
          className="border"
        >
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
