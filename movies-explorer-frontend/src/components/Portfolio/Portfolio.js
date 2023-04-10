import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__links">
          <a href="https://github.com/dizelgerda/how-to-learn" className="portfolio__link">Статичный сайт</a>
          <a href="https://github.com/dizelgerda/russian-travel" className="portfolio__link">Адаптивный сайт</a>
          <a href="https://github.com/dizelgerda/react-mesto-api-full" className="portfolio__link">Одностраничное приложение</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
