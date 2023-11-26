import React, { useState } from "react";
import MyCardSec from "../components/dashboard-section/my-card-sec";
import CashFlowSection from "../components/dashboard-section/cash-flow";
import Select from "react-select";
import LineGraph from "../components/dashboard-section/line-graph";
import MySavings from "../components/dashboard-section/my-saving";
import ExpenseSection from "../components/dashboard-section/expenses-sec";
import MyHistory from "../components/dashboard-section/my-history";
import { dashboardData } from "../components/data";

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState({
    value: "3",
    label: "3 Months",
  });
  const options = [
    {
      value: "3",
      label: "3 Months",
    },
    {
      value: "6",
      label: "6 Months",
    },
  ];

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="main-section">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-12">
            <MyCardSec data={dashboardData?.cardDetails} />
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-6">
            <CashFlowSection data={dashboardData?.myaccount} />
            <div className="row">
              <div className="col-xxl-8">
                <div className="border_e6e9ee p-3 mt-3 rounded-3 line-graph-height">
                  <div className="d-flex justify-content-between">
                    <h1 className="m-0 fs_20 color_15223C">Money Flow</h1>
                    <div className="d-flex gap-2">
                      <span className="border_e6e9ee sec_color fs_14 align-items-center d-flex  px-2 rounded-2">
                        Money Flow
                      </span>
                      <Select
                        className="react-select"
                        styles={customStyles}
                        defaultValue={selectedMonth}
                        onChange={setSelectedMonth}
                        options={options}
                      />
                    </div>
                  </div>
                  <LineGraph sampleData={dashboardData?.graphData} />
                </div>
              </div>
              <div className="col-xxl-4 col-lg-8">
                <MySavings data={dashboardData?.savings} />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <ExpenseSection pieData={dashboardData?.pieData} />
              </div>
              <div className="col-xl-6">
                <MyHistory data={dashboardData?.history} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    color: "#afafaf",
    fontSize: "13px",
    fontWeight: "500",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#fff",
    color: "#333",
    fontSize: "13px",
    fontWeight: "500",
    ":hover": {
      backgroundColor: "#4fb14f",
      color: "#fff",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none", // Remove the separator
  }),
  control: (base, state) => ({
    ...base,
    background: "#FFFF",
    borderRadius: "5px",
    width: "100%",
    border: "2px solid #e6e9ee",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#a0acc3" : "#e6e6e6",
    },
  }),
};
