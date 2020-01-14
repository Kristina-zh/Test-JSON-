import React from "react";

const Controls = ({ pageCount, currentPage, setCurrentPage }) => {
  let controls = [];
  console.log("setCurrentPage :", setCurrentPage);

  for (let i = 1; i <= pageCount; i++) {
    const baseClassName = "pagination-controls__button";
    const activeClassName = i === currentPage ? `${baseClassName}--active` : "";
    controls.push(
      <div
        className={`${baseClassName} ${activeClassName}`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </div>
    );
  }
  return controls;
};

export default Controls;
