import React from "react";

const ImageIcon = ({ fill = "#D6D7DB" }) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 6C12.5 4.80653 12.0259 3.66193 11.182 2.81802C10.3381 1.97411 9.19347 1.5 8 1.5C6.80653 1.5 5.66193 1.97411 4.81802 2.81802C3.97411 3.66193 3.5 4.80653 3.5 6C3.5 11.25 1.25 12.75 1.25 12.75H14.75C14.75 12.75 12.5 11.25 12.5 6Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ImageIcon;
