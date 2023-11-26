import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import OverView from "../../assets/icons/over-view";
import TransactionIcon from "../../assets/icons/tran";
import InvoiceIcon from "../../assets/icons/invoice";
import ActivityIcon from "../../assets/icons/activity";
import SunIcon from "../../assets/icons/sun";
import MoonIcon from "../../assets/icons/moon";
import SettingIcon from "../../assets/icons/setting";
import BellIcon from "../../assets/icons/bell";
import MenuOffcanvas from "../modals/menu-offcanvas";
import MenuIcon from "../../assets/icons/menu-line";

const Navbar = () => {
  const [tab, setTab] = useState("Overview");
  const [mode, setMode] = useState("light");
  const [show, setShow] = useState(false);
  const data = [
    {
      img: <OverView fill={tab === "Overview" ? "#00B3FF" : "#AFAFAF"} />,
      title: "Overview",
    },
    {
      img: (
        <TransactionIcon fill={tab === "Transaction" ? "#00B3FF" : "#AFAFAF"} />
      ),
      title: "Transaction",
    },
    {
      img: <InvoiceIcon fill={tab === "Invoice" ? "#00B3FF" : "#AFAFAF"} />,
      title: "Invoice",
    },
    {
      img: <ActivityIcon fill={tab === "Activity" ? "#00B3FF" : "#AFAFAF"} />,
      title: "Activity",
    },
  ];
  return (
    <nav
      style={{
        borderBottom: "1px solid #e6e9ee",
        zIndex: "99"
      }}
      className="position-sticky top-0 bg-white"
    >
      <div className="d-flex justify-content-center">
        <div className="main-section d-flex justify-content-between align-items-center py-3 ">
          <div className="d-flex gap-lg-4 gap-3">
            <Link
              className="text-decoration-none text-black d-flex gap-2 align-items-center"
              to={"/"}
            >
              <Logo />
              Sakuku
            </Link>
            {data.map((item) => {
              return (
                <div className="d-md-block d-none">
                  <div
                    onClick={() => setTab(item?.title)}
                    className={`d-flex gap-1 align-items-center cursor_pointer py-2 px-2 rounded-2 ${
                      tab === item?.title ? "bg_E3F6FE" : "bg-white"
                    }`}
                  >
                    <div>{item?.img}</div>
                    <div
                      className={`${
                        tab === item?.title ? "primary_color" : "sec_color"
                      }`}
                    >
                      {item?.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-lg-block d-none">
            <div className="d-flex gap-3 align-items-center ">
              <div
                style={{
                  height: "30px",
                  width: "85px",
                }}
                className="bg_F5F6FA rounded-2  d-flex gap-1 justify-content-center align-items-center"
              >
                <div
                  style={{ padding: "2px 10px" }}
                  onClick={() => setMode("light")}
                  className={`${
                    mode === "light"
                      ? " bg-white shadow_AFAFAF30 rounded-2"
                      : ""
                  }`}
                >
                  <SunIcon />
                </div>
                <div
                  style={{ padding: "2px 10px" }}
                  className={`${
                    mode === "dark" ? " bg-white shadow_AFAFAF30 rounded-2" : ""
                  }`}
                  onClick={() => setMode("dark")}
                >
                  <MoonIcon />
                </div>
              </div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                }}
                className="bg_F5F6FA rounded-circle d-flex justify-content-center align-items-center"
              >
                <BellIcon />
              </div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                }}
                className="bg_F5F6FA rounded-circle d-flex justify-content-center align-items-center"
              >
                <SettingIcon />
              </div>
              <div
                style={{
                  height: "45px",
                  width: "45px",
                }}
                className="bg_d9d9d9 rounded-circle d-flex justify-content-center align-items-center"
              ></div>
            </div>
          </div>
          <div className="d-lg-none">
            <button
              className="border-0 bg-transparent"
              onClick={() => setShow(true)}
            >
              <MenuIcon />
            </button>
          </div>
          <MenuOffcanvas show={show} handleClose={() => setShow(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
