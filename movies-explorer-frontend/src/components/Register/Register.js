import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';
import { useState } from 'react';

const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

function Register({ onSubmit }) {
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
    else if (name === 'name') {
      if(value.length > 2 && value.length <= 30) {
        setIsValid({...isValid, name: true})
        setErrors({...errors, name: ''})
      } else {
        setIsValid({...isValid, name: false})
        setErrors({...errors, name: 'Имя должно быть длиннее 2 и короче 30 символов'})
      }
    }
  }

  function handleChange(e) {
    const { target: { name, value } } = e;
    setData({ ...data, [name]: value });
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
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="login__label">Имя</label>
          <input name="name" type="text" className="login__input" placeholder="Имя" onChange={handleChange} required />
          <span className="login__error">{errors.name}</span>
          <label htmlFor="email" className="login__label" >E-mail</label>
          <input name="email" type="email" className="login__input" placeholder="E-mail" onChange={handleChange} required />
          <span className="login__error">{errors.email}</span>
          <label htmlFor="password" className="login__label">Пароль</label>
          <input name="password" type="password" className="login__input" placeholder="Пароль" onChange={handleChange} required />
          <span className="login__error">{errors.password}</span>
          <button type="submit" className="login__submit" disabled={!(isValid.name && isValid.email && isValid.password)} >Зарегистрироваться</button>
          <p className="login__text">Уже зарегистрированы? <Link to="/signin" className="login__link">Войти</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
