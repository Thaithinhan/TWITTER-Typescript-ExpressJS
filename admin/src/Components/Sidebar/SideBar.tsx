// Trong Sidebar.js

import "./Sidebar.css";

import React from "react";
import { Link } from "react-router-dom";

import {
  faSignOutAlt,
  faSignsPost,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div
      className="sidebar bg-blue-500 w-56 h-screen p-4 flex flex-col items-center
    "
    >
      <ul className="space-y-2">
        {/* <li>
          <Link to="/" className="text-white hover:underline">
            <FontAwesomeIcon
              icon={faReceipt}
              className="me-2 text-white text-xl"
            />{" "}
            Manager Order
          </Link>
        </li> */}
        <li>
          <Link to="/" className="text-white hover:underline">
            <FontAwesomeIcon
              icon={faUserGear}
              className="me-2 text-white text-xl"
            />{" "}
            Manager User
          </Link>
        </li>
        <li>
          <Link to="/manager-tweets" className="text-white hover:underline">
            <FontAwesomeIcon
              icon={faSignsPost}
              className="me-2 text-white text-xl"
            />{" "}
            Manager Tweets
          </Link>
        </li>
      </ul>
      <button
        className="logout-button font-bold "
        onClick={() => {
          localStorage.removeItem("accessToken");
          window.location.href = "/auth/login";
        }}
      >
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
