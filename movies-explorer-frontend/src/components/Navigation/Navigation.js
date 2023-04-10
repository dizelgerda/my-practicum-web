import './Navigation.css';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpenMenu(false) }, [location.pathname])

  return (
    <>
      <button type="button" className={`${isOpenMenu ? "navigation__button_active" : ""}  navigation__button`} onClick={() => setIsOpenMenu(!isOpenMenu)}></button>
      <div className={`navigation ${isOpenMenu ? "" : "navigation_invisible"}`}>
        <div className="navigation__nav-links">
          {isOpenMenu
            ? (<NavLink to="/" className={({ isActive }) => "navigation__nav-link " + (isActive ? "navigation__nav-link_active" : "")}>Главная</NavLink>)
            : null}
          <NavLink to="/movies" className={({ isActive }) => "navigation__nav-link " + (isActive ? "navigation__nav-link_active" : "")}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({ isActive }) => "navigation__nav-link " + (isActive ? "navigation__nav-link_active" : "")}>Сохранённые фильмы</NavLink>
        </div>
        <Link to="/profile" className="navigation__profile">
          <p className="navigation__link">Аккаунт</p>
          <div className="navigation__profile-icon"></div>
        </Link>
      </div>
    </>
  );
}

export default Navigation;
