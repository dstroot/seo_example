import React, { useEffect } from "react";

const About = () => {
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • About`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  return <div style={{ background: "red" }}>ABOUT PAGE</div>;
};

export default About;
