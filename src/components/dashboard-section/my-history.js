import React from "react";
import ArrowDown from "../../assets/icons/arrow-down";
import ArrowRight from "../../assets/icons/arrow-end";

const MyHistory = ({data}) => {
  return (
    <div
      style={{ height: "25rem" }}
      className="border_e6e9ee p-3 mt-xxl-3 mt-5 rounded-3"
    >
      <div className="d-flex justify-content-between">
        <h1 className="m-0 fs_20 color_15223C fw_600">History Transactions</h1>
        <span className="primary_color fs_14 fw_500">View all</span>
      </div>
      {data?.map((item, index) => {
        return (
          <div className="d-flex  justify-content-between mt-5">
            <div className="d-flex gap-3 align-items-center">
              <div className="bg_E3F6FE p-3 rounded-2">
                {index === 1 ? <ArrowRight /> : <ArrowDown />}
              </div>
              <div>
                <h3 className="fs_20 m-0">{item?.label}</h3>
                <p className="fs_18">{item?.date}</p>
              </div>
            </div>
            <div className={`${index === 1 ? "color_E74A51" : "color_2DD683"}`}>
              {index === 1 ? "-" : "+"} ${item?.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyHistory;
