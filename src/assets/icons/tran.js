import React from "react";

const TransactionIcon = ({ fill = "#AFAFAF" }) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 17L11 13M5 13V1V13ZM5 1L1 5L5 1ZM5 1L9 5L5 1ZM15 5V17V5ZM15 17L19 13L15 17Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TransactionIcon;
