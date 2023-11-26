import React from "react";

const MySavings = ({data}) => {

  return (
    <div
    style={{ height: "28rem" }}
      className="border_e6e9ee p-3 mt-xxl-3 mt-5 rounded-3"
    >
      <div className="d-flex justify-content-between">
        <h1 className="m-0 fs_20 color_15223C">My Savings</h1>
        <span className="primary_color fs_14 fw_500">View all</span>
      </div>
      {data.map((item) => {
        return (
          <div className="mt-4 pt-3 d-flex gap-3 align-items-center">
            <div className="w-100">
              <label className="color_15223C fw_500">{item?.label}</label>
              <div className="html-progress-container">
                <progress
                  className="html-progress"
                  value={item?.value}
                  max={1000}
                ></progress>
              </div>
            </div>
            <span className="color_15223C fw_500">${item?.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MySavings;
