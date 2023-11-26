import React, { useState } from "react";
import Select from "react-select";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";
import { pieChartSuggestions } from "../data";
const ExpenseSection = ({pieData}) => {
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
 
  
  const COLORS = ["#00B3FF", "#AFAFAF", "#3B3F48", "#76D9DF"];
  const data = [
    { name: "MAR", value: 100 },
    { name: "FEB", value: 25 },
    { name: "JAN", value: 15 },
    { name: "APR", value: 30 },
    { name: "JAN", value: 23 },
    { name: "FEB", value: 25 },
    { name: "MAR", value: 15 },
    { name: "APR", value: 45 },
    { name: "JAN", value: 15 },
    { name: "FEB", value: 25 },
    { name: "MAR", value: 15 },
    { name: "APR", value: 30 },
  ];
  return (
    <div
      style={{ minHeight: "25rem" }}
      className="border_e6e9ee p-3 mt-xxl-3 mt-5 rounded-3"
    >
      <div className="d-flex justify-content-between">
        <h1 className="m-0 fs_20 color_15223C">My Savings</h1>
        <Select
          className="react-select"
          styles={customStyles}
          defaultValue={selectedMonth}
          onChange={setSelectedMonth}
          options={options}
        />
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div>
          <h2 className="sec_color fs_14 m-0">Daily</h2>
          <p className="color_15223C fs_18 fw_600 mt-2">$475</p>
        </div>
        <div>
          <h2 className="sec_color fs_16 m-0">Weekly</h2>
          <p className="color_15223C fs_18 fw_600 mt-2">$3,327</p>
        </div>
        <div>
          <h2 className="sec_color fs_16 m-0">Monthly</h2>
          <p className="color_15223C fs_18 fw_600 mt-2">$12.131</p>
        </div>
      </div>
      <div className="d-flex flex-xxl-row flex-column align-items-center">
        <ResponsiveContainer width={"100%"} height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={0}
              labelLine={false}
              label={() => null}
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div>
          {pieChartSuggestions?.map((item) => (
            <div
              className={`d-flex align-items-center position-relative fw_400 mb-3 gap-2 sec_color`}
            >
              <div
                className={` outer_circle d-flex align-items-center justify-content-center me-1`}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <span className={` inner_circle bg_color_ffffff`}></span>
              </div>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseSection;
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
