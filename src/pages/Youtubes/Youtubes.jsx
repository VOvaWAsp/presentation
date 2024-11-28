import { NavLink } from "react-router-dom";
import css from "./Youtubes.module.css";

function Youtubes() {
  return (
    <div className={css.containered}>
      <div className={css.container}>
        <div className={css.block}>
          <h2>6. Сайти, які я відвідую </h2>
          <h2>YouTube:</h2>
          <p>Для перегляду відео, гайдів та навчання.</p>
          <p>
            Побудований за допомогою складних технологій (JavaScript, Python,
            Go) і серверів Google.
          </p>
        </div>
        <div className={css.block1}>
          <h2>YouTube Music:</h2>
          <p>Для прослуховування улюбленої музики без перерв.</p>
        </div>
        <div className={css.blockLink}>
          <NavLink className={css.link} to="/structure-data-base">
            Previous
          </NavLink>
          <hr />
          <NavLink className={css.link} to="/result">
            Next
          </NavLink>
        </div>
      </div>
      <div>
        <img
          width="700px"
          src="https://cdn6.aptoide.com/imgs/d/1/e/d1e11e70ba9497a332a03630ad6a5b83_fgraphic.png"
          alt=""
        />
        <hr />
        <img
          width="700px"
          src="https://www.pcwelt.de/wp-content/uploads/2024/02/shutterstock_2290358085.jpg?quality=50&strip=all&w=1024"
          alt=""
        />
      </div>
    </div>
  );
}

export default Youtubes;
