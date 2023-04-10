import './Footer.css';

function Footer() {
  const time = new Date();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <p className="footer__copyright">&copy; {time.getFullYear()}</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/web/" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com/dizelgerda" className="footer__link">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
