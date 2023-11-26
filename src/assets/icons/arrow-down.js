import React from "react";

const ArrowDown = ({ fill = "#E74A51" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6401_732)">
        <circle cx="16" cy="16" r="16" fill="#00B3FF" />
        <path
          d="M16.866 21C16.4811 21.6667 15.5189 21.6667 15.134 21L12.5359 16.5C12.151 15.8333 12.6321 15 13.4019 15L18.5981 15C19.3679 15 19.849 15.8333 19.4641 16.5L16.866 21Z"
          fill="white"
        />
        <path
          d="M16 15L16 6"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M22 24H10"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6401_732">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDown;
