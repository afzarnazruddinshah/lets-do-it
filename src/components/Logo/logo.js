import React from "react";
import "./logo.scss";

const Logo = (props) => {
  const title = props.title.split(" ");

  return (
    <>
      <h4 style={{ userSelect: "none" }}>
        <b>
          {title.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </b>
      </h4>
    </>
  );
};

export default Logo;
