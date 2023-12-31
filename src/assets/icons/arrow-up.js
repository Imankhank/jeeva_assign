import React from "react";

const ArrowUpIcon = ({ fill = "#E74A51", height = "14", width = "12" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1V13M1 6L6 1L1 6ZM6 1L11 6L6 1Z"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
