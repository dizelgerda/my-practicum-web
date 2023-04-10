import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <div className="section">
        <h2 className="section__title">О проекте</h2>
        <div className="about-project__container">
          <article>
            <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article>
            <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
          <div className="about-project__scale-container">
            <figure className="about-project__scale about-project__scale_color_green">1 неделя</figure>
            <figure className="about-project__scale about-project__scale_color_gray">4 недели</figure>
            <p className="about-project__signature about-project__signature_size_small">Back-end</p>
            <p className="about-project__signature about-project__signature_size_big">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
