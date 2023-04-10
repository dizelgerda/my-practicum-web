import './MoviesCardList.css';

import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

let step = window.screen.width > 480 ? 7 : 5;

function MoviesCardList({ cards, onDelete, onAdd }) {
  console.log(cards)
  const [showCards, setShowCards] = useState(cards.slice(0, step))
  const [position, setPosition] = useState(step);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function showMore() {
    setShowCards(cards.slice(0, position + step));
    setPosition(position + step);
  }

  function handleResize() {
    const { screen: { width } } = window;
    if (width > 480) step = 7;
    else step = 5;
  }

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        {cards.length
          ? showCards.map((item) => (<MoviesCard key={item.id ?? item.movieId} movie={item} onDelete={onDelete} onAdd={onAdd} />))
          : (<p className="movies-list__alert" >
            Ничего не найдено
          </p>)}
        {cards.length > position
          ? (<button type="button" className='movies-list__button' onClick={showMore}>Ещё</button>)
          : null}
      </div>
    </section>
  );
}

export default MoviesCardList;
