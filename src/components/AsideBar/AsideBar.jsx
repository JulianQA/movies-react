import React, { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { FiLogOut, FiSettings } from "react-icons/fi";
import "./_asidesBar.scss";
import { useNavigate } from "react-router-dom";

const AsideBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const handleNaviagate = (page) => {
    navigate(page);
  };
  const handleActive = (value) => {
    setActive(value);
  };
  return (
    <aside className="AsideBar">
      <div className="AsideBar__menu">
        <div
          onClick={() => {
            handleNaviagate("/");
            handleActive("home");
          }}
          className={
            active === "home"
              ? "flex-AsideBar-menu active"
              : "flex-AsideBar-menu"
          }
        >
          <GrHomeRounded className="AsideBar__icon" />
          <span>Home</span>
        </div>
        <div
          onClick={() => {
            handleNaviagate("/categories");
            handleActive("categories");
          }}
          className={
            active === "categories"
              ? "flex-AsideBar-menu active"
              : "flex-AsideBar-menu"
          }
        >
          <BiCategory className="AsideBar__icon" />
          <span>Categories</span>
        </div>
      </div>
      <div className="AsideBar__bottom">
        <div className="flex-AsideBar-menu">
          <FiLogOut className="AsideBar__icon" />
          <span>Settings</span>
        </div>
        <div className="flex-AsideBar-menu">
          <FiSettings className="AsideBar__icon" />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export { AsideBar };
