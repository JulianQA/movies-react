import React from "react";
import { IoIosSearch } from "react-icons/io";
import { GiPopcorn } from "react-icons/gi";
import "./_headers.scss";

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="Header">
      <div className="Header__logo">
        <GiPopcorn className="logo__icon" />
        <span className="logo__name">JMOVIES</span>
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
