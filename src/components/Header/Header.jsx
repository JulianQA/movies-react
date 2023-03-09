import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GiPopcorn } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./_headers.scss";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${valueSearch}`);
  };
  const handleNavigate = (route) => {
    navigate(route);
  };
  const classActive = (route) =>
    active === route ? "routes__route active" : "routes__route";

  const { genres } = useSelector((state) => state.genres);
  return (
    <header className="Header">
      <div className="Header__logo">
        <GiPopcorn className="logo__icon" />
        <span className="logo__name">JMOVIES</span>
      </div>
      <nav className="Header__routes">
        <div
          className={classActive("home")}
          onClick={() => {
            handleNavigate("/");
            setActive("home");
          }}
        >
          <span>Home</span>
        </div>
        <div
          className="routes__route"
          onClick={() => {
            setToggleMenu(!toggleMenu);
            setActive(null);
          }}
        >
          <span>Categories</span>
          <MdKeyboardArrowRight size={15} />
        </div>
      </nav>
      <form onSubmit={handleSubmit} className="Header__form">
        <input
          type="text"
          className="Header__input"
          value={valueSearch || ""}
          onChange={(e) => setValueSearch(e.target.value)}
        />
        <button className="Header__button">
          <IoIosSearch className="button__icon" />
        </button>
      </form>
      <div className="Header__login">Login</div>
      <CategoriesMenu
        genres={genres}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
    </header>
  );
};

export { Header };
