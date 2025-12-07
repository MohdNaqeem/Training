// Shimmer.jsx
import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-img" />
          <div className="shimmer-line title" />
          <div className="shimmer-line cuisines" />
          <div className="shimmer-row">
            <div className="shimmer-pill rating" />
            <div className="shimmer-pill price" />
          </div>
          <div className="shimmer-line delivery" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
