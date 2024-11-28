import { NavLink } from "react-router-dom";
import css from "./FirstPage.module.css";

function FirstPage() {
  return (
    <>
      <div className={css.container}>
        <img
          className={css.img}
          src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
          alt="Website Development"
        />
        <div className={css.block}>
          <h2>1. Вступ: Що таке вебсайти?</h2>
          <p>
            Вебсайти — це цифрові платформи, створені для надання інформації, послуг,
            розваг або взаємодії між користувачами. Вони стали невід'ємною частиною
            нашого життя, дозволяючи отримувати доступ до знань, спілкування та розваг
            у будь-який момент.
          </p>
        </div>
        <div className={css.blockLink}>
            <NavLink className={css.link} to='/web-site'>Next</NavLink>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
