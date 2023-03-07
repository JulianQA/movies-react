import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GiPopcorn } from "react-icons/gi";
import "./_headers.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleNavigate = (route) => {
    navigate(route);
  };
  const classActive = (route) =>
    active === route ? "routes__route active" : "routes__route";
  return (
    <header className="Header">
      <div className="Header__logo">
        <GiPopcorn className="logo__icon" />
        <span className="logo__name">JMOVIES</span>
      </div>
      <div className="Header__routes">
        <div
          className={classActive("home")}
          onClick={() => {
            handleNavigate("/");
            setActive("home");
          }}
        >
          Home
        </div>
        <div
          className={classActive("categories")}
          onClick={() => {
            handleNavigate("/categories");
            setActive("categories");
          }}
        >
          Categories
        </div>
      </div>
      <form onSubmit={handleSubmit} className="Header__form">
        <input type="text" className="Header__input" />
        <button className="Header__button">
          <IoIosSearch className="button__icon" />
        </button>
      </form>
      <div className="Header__login">Login</div>
    </header>
  );
};

export { Header };
