import React from "react";

const ActivityIcon = ({ fill = "#AFAFAF" }) => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.24463 13.781L8.23763 9.89103L11.6516 12.573L14.5806 8.79303"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.9948 5.12202C19.0562 5.12202 19.9168 4.26151 19.9168 3.20002C19.9168 2.13852 19.0562 1.27802 17.9948 1.27802C16.9333 1.27802 16.0728 2.13852 16.0728 3.20002C16.0728 4.26151 16.9333 5.12202 17.9948 5.12202Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9243 2.12018H5.65655C2.64511 2.12018 0.777832 4.2529 0.777832 7.26434V15.3467C0.777832 18.3582 2.6085 20.4817 5.65655 20.4817H14.2607C17.2721 20.4817 19.1394 18.3582 19.1394 15.3467V8.30782"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ActivityIcon;
