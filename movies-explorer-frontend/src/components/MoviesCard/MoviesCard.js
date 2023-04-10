import './MoviesCard.css'

import { useLocation } from 'react-router-dom';

const baseUrl = 'https://api.nomoreparties.co';

function MoviesCard({ movie, onDelete, onAdd }) {
  const { nameRU, duration, image, isSaved, trailerLink } = movie;
  const location = useLocation();

  function getDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours ? `${hours}ч` : ''} ${minutes}м`.trim()
  }

  function handleClick() {
    if (isSaved) {
      onDelete(movie.savedId);
    }
    else {
      onAdd(movie)
    }
  }

  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__title">{nameRU}</h2>
        <p className="card__subtitle">{getDuration(duration)}</p>
        {location.pathname === '/movies'
          ? (<button type="button" onClick={handleClick} className={`card__like ${isSaved ? "card__like_active" : ""}`}></button>)
          : (<button type="button" onClick={() => onDelete(movie._id)} className='card__like card__like_delete' ></button>)}

      </div>
      <a href={trailerLink} target="myTab"><img src={image.url ? `${baseUrl}${image.url}` : image} alt={`Постер фильма ${nameRU}`} className="card__image" /></a>
    </li>
  );
}

export default MoviesCard;
