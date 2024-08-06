import React from "react";

import PropTypes from "prop-types";

const imageAltText = "A macBook laptop with some coding";

const Home = ({ name, title }) => {
  const arrowStyle = {
    position: "absolute",
    bottom: "3rem",
    zIndex: 2,
    backgroundColor: "white",
    left: "50%",
    borderRadius:"50%"
  };
  const arrowImageStyle={ 
    height: "3rem",
     width: "3rem",
    border:"2px black" };
    const textStyle={
      
      textShadow: " 0px 2px #e5e7df",
      color:"#7ea0ea"
    }
  return (
    <section id="home" className="min-height">
      <img className="background" src="downArrowback.jpg" alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1 style={textStyle}>{name}</h1>
        <h2 style={textStyle}>{title}</h2>
      </div>
      <div style={arrowStyle}>
        <img src="down_arrow1.svg" style={arrowImageStyle} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
