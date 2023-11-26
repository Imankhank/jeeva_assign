import React from "react";
import ArrowUpIcon from "../../assets/icons/arrow-up";

const CashFlowSection = ({data}) => {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <div className="col-xxl-3 col-xl-4 col-lg-6 mt-3">
            {" "}
            <div
              style={{ borderLeft: `7px solid ${item.color}` }}
              className="border_e6e9ee rounded-3  ps-4 py-3 "
            >
              <div className="d-flex align-items-center">
                <div>
                  <h2 className="sec_color fs_14 m-0">{item?.title}</h2>
                  <p className="color_15223C fs_18 fw_600 m-0 pt-2">
                    {item?.amount}
                  </p>
                </div>
                {item?.profit && (
                  <div
                    style={{ height: "30px" }}
                    className="d-flex align-items-center ms-3 color_2DD683 bg_2DD683 rounded-3 px-2"
                  >
                    <ArrowUpIcon fill="#2DD683" />
                    {item?.profit}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CashFlowSection;
