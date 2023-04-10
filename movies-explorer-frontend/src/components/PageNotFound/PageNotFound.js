import './PageNotFound.css';

import { Link, useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button onClick={() => navigate(-1)} className="not-found__link">Назад</button>
    </div>
  );
}

export default PageNotFound;
