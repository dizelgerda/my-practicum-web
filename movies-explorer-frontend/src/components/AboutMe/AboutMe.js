import './AboutMe.css';
import photoProfile from '../../images/aboutMe.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <div className="section">
        <h2 className="section__title">Студент</h2>
        <div className="about-me__container">
          <article>
            <h3 className="about-me__title">Виталий</h3>
            <p className="about-me__subtitle">Фронтенд-волшебник, 73 лет</p>
            <p className="about-me__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </article>
          <ul className="about-me__links">
            <li><a href="https://github.com/dizelgerda" className="about-me__link">GitHub</a></li>
          </ul>
          <img src={photoProfile} alt="Фото" className="about-me__image"></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
