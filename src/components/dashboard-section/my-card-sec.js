import React from "react";
import card from "../../assets/images/Credit-card.png";
import ArrowUpIcon from "../../assets/icons/arrow-up";
import GreyCircle from "./grey-circle";
import ArrowRightIcon from "../../assets/icons/arrow-right";

const MyCardSec = ({ data }) => {
  return (
    <>
      <h1 className="m-0 fs_20 ps-1 color_15223C"> My card</h1>
      <img
        className="mt-3"
        style={{ width: "100%", height: "auto" }}
        src={card}
      />
      <div className="border_e6e9ee rounded-4 p-4 w-100">
        <h2 className="sec_color fs_14 m-0">Your Balance</h2>
        <div className="d-flex justify-content-between mt-2">
          <span className="color_15223C fs_18 fw_600">${data?.value1}</span>
          <span className="color_2DD683 fs_16 fw_500 d-flex gap-2 align-items-center">
            <ArrowUpIcon fill="#2DD683" />${data?.value2}
          </span>
          <span className="color_E74A51 fs_16 fw_500 d-flex gap-2 align-items-center">
            <ArrowUpIcon />${data?.value3}{" "}
          </span>
        </div>
        <hr className="border_e6e9ee" />
        <div className="d-flex justify-content-between mt-2">
          <div>
            <h2 className="sec_color fs_14 m-0">Currency</h2>
            <p className="color_15223C fs_18 fw_600 mt-2">{data?.currency}</p>
          </div>
          <div>
            <h2 className="sec_color fs_16 m-0">Status</h2>
            <p className="color_15223C fs_18 fw_600 mt-2">{data?.status}</p>
          </div>
        </div>
      </div>
      <button className="border-0 bg_F5F6FA rounded-3 w-100 py-2 color_15223C mt-3 fs_14 fw_500 d-flex justify-content-center align-items-center">
        <span
          style={{ height: "25px", width: "25px" }}
          className="bg_00B3FF  rounded-circle text-white me-2 fs_14 d-flex align-items-center justify-content-center "
        >
          +
        </span>
        Add card
      </button>
      <h1 className="m-0 fs_20 ps-1 color_15223C mt-5"> Quick Transfer</h1>
      <div className="d-flex gap-4 align-items-center mt-4">
        <GreyCircle />
        <GreyCircle />
        <GreyCircle />
        <GreyCircle />
        <GreyCircle />
        <ArrowRightIcon />
      </div>
      <h2 className="sec_color fs_14 mt-5">Card Number</h2>
      <input
        type="number"
        className="input-field w-100 rounded-3 border_00b3ff border_00b3ff py-1 ps-2 fs_22 mt-2"
      />
      <div className="d-flex gap-3 mb-5">
        <button className="border-0 text-white bg_00B3FF rounded-3 w-100 py-3 color_15223C mt-3 fs_16 fw_500 d-flex justify-content-center align-items-center">
          Send money
        </button>
        <button className="border-0 bg_F5F6FA rounded-3 w-100 py-3 color_15223C mt-3 fs_16 fw_500 d-flex justify-content-center align-items-center">
          Save as Draft
        </button>
      </div>
    </>
  );
};

export default MyCardSec;
