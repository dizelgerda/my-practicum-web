import './Profile.css';

import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext'

function Profile({ onSubmit, onOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [data, setData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [editMode, setEditMode] = useState(false);

  function handleChange(e) {
    const { target: { name, value } } = e;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (await onSubmit(data)) {
      setEditMode(false);
    }
  }

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <div className="profile__container">
        <h1 className="profile__title">{`Привет, ${data.name}!`}</h1>
        <div className="profile__item">
          <label className="profile__label">Имя</label>
          {editMode
            ? (<input type="text" name="name" className="profile__input" onChange={handleChange} value={data.name} required />)
            : (<p className="profile__text">{data.name}</p>)}
        </div>
        <div className="profile__item">
          <label className="profile__label">E-mail</label>
          {editMode
            ? (<input type="email" name="email" className="profile__input" onChange={handleChange} value={data.email} required />)
            : (<p className="profile__text">{data.email}</p>)}
        </div>
      </div>
      <div className="profile__menu">
        {editMode
          ? (
            <>
              <p className="profile__error"></p>
              <button type="submit" className="profile__button-submit" disabled={!(data.name !== currentUser.name || data.email !== currentUser.email)}>Сохранить</button>
            </>
          )
          : (
            <>
              <button type="button" className="profile__button" onClick={() => setEditMode(true)}>Редактировать</button>
              <button type="button" className="profile__button profile__button_dangerous" onClick={onOut} >Выйти из аккаунта</button>
            </>
          )}
      </div>
    </form >
  );
}

export default Profile;
