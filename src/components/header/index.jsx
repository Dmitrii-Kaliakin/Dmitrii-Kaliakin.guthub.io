import cn from "classnames";
import { useContext } from "react";
import { UserContext } from "../../contexts/current-user-context";
import { Button } from "../button";

import s from "./styles.module.css";
import "./styles.css";
import { ThemeContext } from "../../contexts/theme-context";
<<<<<<< HEAD
import { CardsContext } from "../../contexts/card-context";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as FavoriteIcon } from "./img/favorites.svg";

export function Header({ children }) {
  const { currentUser, onUpdateUser } = useContext(UserContext);
  const { favorites } = useContext(CardsContext);
  const { toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const handleClickButtonEdit = () => {
    onUpdateUser({ name: "Дмитрий", about: "Студент" });
=======

export function Header({ children }) {
  const { currentUser, onUpdateUser } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);
  console.log("currentUser", currentUser);

  const handleClickButtonEdit = () => {
    onUpdateUser({ name: "Вася", about: "Ментор" });
>>>>>>> 25efa98f8b6dfeb23cd333ded8e02fa3cd31d7f2
  };

  return (
    <header className={s.header}>
      <div className={cn("container", s.wrapper)}>
        {children}
<<<<<<< HEAD
        <div className={s.iconsMenu}>
          <Link className={s.favoritesLink} to={{ pathname: "/favorites" }}>
            <FavoriteIcon />
            {favorites.length !== 0 && (
              <span className={s.iconBubble}>{favorites.length}</span>
            )}
          </Link>
          <Link
            to="/login"
            replace
            state={{
              backgroundLocation: location,
              initialPath: location.pathname,
            }}
          >
            Войти
          </Link>
        </div>
=======
        <label class="wraper" for="something">
          <div class="switch-wrap">
            <input type="checkbox" id="something" onChange={toggleTheme} />
            <div class="switch"></div>
          </div>
        </label>
>>>>>>> 25efa98f8b6dfeb23cd333ded8e02fa3cd31d7f2
      </div>
    </header>
  );
}
