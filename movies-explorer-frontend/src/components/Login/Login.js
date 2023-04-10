import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Login.css';
import logo from '../../images/logo.svg';

const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

function Login({ onSubmit }) {
  const [data, setData] = useState({});
  const [isValid, setIsValid] = useState({});
  const [errors, setErrors] = useState({});

  function checkValid(name, value) {
    if (name === 'email') {
      if(regEmail.test(value)) {
        setIsValid({...isValid, email: true})
        setErrors({...errors, email: ''})
      } else {
        setIsValid({...isValid, email: false})
        setErrors({...errors, email: 'Введите email'})
      }
    }
    else if (name === 'password') {
      if(value.length >= 9) {
        setIsValid({...isValid, password: true})
        setErrors({...errors, password: ''})
      } else {
        setIsValid({...isValid, password: false})
        setErrors({...errors, password: 'Пароль должен быть длиннее 8 символов'})
      }
    }
  }

  function handleChange(e) {
    const { target: { name, value } } = e;
    setData({...data, [name]: value });
    checkValid(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/"><img className="login__logo" src={logo} alt="Лого" /></Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login__label">E-mail</label>
          <input name="email" type="email" className="login__input" placeholder="E-mail" onChange={handleChange} required />
          <span className="login__error">{errors.email}</span>
          <label htmlFor="password" className="login__label" >Пароль</label>
          <input name="password" type="password" className="login__input" placeholder="Пароль" onChange={handleChange} required />
          <span className="login__error">{errors.password}</span>
          <button className="login__submit" disabled={!(isValid.email && isValid.password)}>Войти</button>
          <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
