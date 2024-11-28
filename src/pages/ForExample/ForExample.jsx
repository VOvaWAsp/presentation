import { NavLink } from "react-router-dom";
import css from "./ForExample.module.css";

function ForExample() {
  return (
    <div className={css.containered}>
      <div className={css.container}>
        <div className={css.block}>
          <h2>5. Приклад технологій</h2>
          <h2>Google V8 Engine: </h2>
          <p>
            Використовується для роботи JavaScript у браузерах (наприклад,
            Google Chrome).
          </p>
          <p>Забезпечує швидке виконання JavaScript-коду.</p>
        </div>
        <div className={css.block1}>
          <h2>React:</h2>
          <p>Бібліотека для створення інтерфейсів користувача.</p>
        </div>
        <div className={css.block2}>
          <h2>Firebase:</h2>
          <p>
            Платформа для бекенду, яку використовує YouTube для збереження даних
            та аутентифікації.
          </p>
        </div>
        <div className={css.blockLink}>
          <NavLink className={css.link} to="/structure-data-base">
            Previous
          </NavLink>
          <hr />
          <NavLink className={css.link} to="/youtubes">
            Next
          </NavLink>
        </div>
      </div>
      <div>
        <img width="1000px" src="https://i.ytimg.com/vi/0L8_QgI07BM/maxresdefault.jpg" alt="" />
      </div>
    </div>
  );
}

export default ForExample;
