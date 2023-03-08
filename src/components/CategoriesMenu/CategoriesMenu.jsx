import React from "react";
import { useNavigate } from "react-router-dom";
import "./_categoriesMenu.scss";

const CategoriesMenu = ({ genres, toggleMenu, setToggleMenu }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/category/${id}`);
  };
  return (
    <div className={`CategoriesMenu ${toggleMenu ? "isActive" : ""}`}>
      <ul className="CategoriesMenu__ul">
        {genres?.genres.map((item) => (
          <li className="CategoriesMenu__genre" key={item?.id}>
            <span
              onClick={() => {
                handleNavigate(item?.id);
                setToggleMenu(false);
              }}
            >
              {item?.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CategoriesMenu };
