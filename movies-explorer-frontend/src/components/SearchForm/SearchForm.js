import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./SearchForm.css";

function SearchForm({ onSubmit, onChecked }) {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    if (location.pathname === '/movies') {
      const SearchHistory = localStorage.getItem('SearchHistory');
      if (SearchHistory) {
        const savedSearch = JSON.parse(SearchHistory)
        setData(savedSearch.params);
      }
    }
  }, []);

  function handleChange(e) {
    const { target: { name, value } } = e;
    setData({ ...data, [name]: value });
  }

  function handleChecked(e) {
    const { target: { name, checked } } = e;
    setData({ ...data, [name]: checked });
    onChecked({ ...data, [name]: checked })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input type="text" name="request" className="search-form__input" placeholder="Фильм" onChange={handleChange} value={data?.request ?? ''} required />
          <button type="submit" className="search-form__submit"></button>
          <div className="search-form__switch-container">
            <div className="switch">
              <input type="checkbox" name="isShort" className="switch__input" onChange={handleChecked} checked={data?.isShort ?? false} />
            </div>
            <label htmlFor="isShort" className="search-form__label">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
