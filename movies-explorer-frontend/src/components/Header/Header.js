import './Header.css';

import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const location = useLocation();

  const elementLogin = (
    <div className="heder__login-container">
      <Link to="/signup" className="header__link">Регистрация</Link>
      <Link to="/signin" className="heder__button">Войти</Link>
    </div>
  );

  return (
    <header className={`${location.pathname === '/' ? "header_color_dark-green" : null} header`}>
      <div className="header__container">
        <Link to="/" className="heder__logo"></Link>

        {loggedIn ? (<Navigation />) : elementLogin}
      </div>
    </header>
  );
}

export default Header;
