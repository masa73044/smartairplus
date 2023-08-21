import React, { useState } from "react";
import css from "./Layout.module.css";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";

const Layout = () => {
  const { pathname } = useLocation();
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    // Trigger your desired action with the input text
    console.log("Input text:", inputText);
  };
  return (
    <div className={css.container}>
      <Sidebar />

      {/* {default} */}
      {pathname === "/" && <Navigate to="/dashboard" />}
      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>
        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          {/* <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search by City" />
            <button type="submit">Submit</button>
          </div> */}

          {/* <div className={css.searchBar}>
            <BiSearch size={20} />
            <input
              type="text"
              placeholder="Select by City"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className={css.submitBtn}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div> */}

          {/* <div className={css.profile}>
            <img src="./profile.png" alt="person image" />
            <div className={css.details}>
              <span>Lebron James</span>
              <span>Lebron@gmail.com</span>
            </div>
          </div> */}
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
