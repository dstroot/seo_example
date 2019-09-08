import React, { useEffect } from "react";

const PageNotFound = () => {
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • 404`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <span>
      <h1>404 Page Not Found</h1>
      <p>Sorry, this page is nonexistent.</p>
    </span>
  );
};

export default PageNotFound;
