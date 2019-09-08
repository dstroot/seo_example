import React, { useEffect } from "react";

const Home = () => {
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • Home`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  return <div style={{ background: "orange" }}>This is a home page</div>;
};

export default Home;
