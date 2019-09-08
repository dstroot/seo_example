import React, { useEffect } from "react";

const Random = () => {
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • Random`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  return <div style={{ background: "lightgreen" }}>RANDOM PAGE</div>;
};

export default Random;
