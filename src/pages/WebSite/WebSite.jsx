import { NavLink } from 'react-router-dom';
import css from './WebSite.module.css'

function WebSite() {
  return (
    <>
        <div className={css.container}>
        <img
          className={css.img}
          src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg"
          alt="Website Development"
        />
        <div className={css.block}>
        <h2>2. Поява вебсайтів</h2>
      <h3>
        Перший сайт: З’явився у 1991 році. Його створив Тім Бернерс-Лі для
        обміну науковою інформацією.
      </h3>
      <p>
        З часом технології еволюціонували, що дозволило створювати інтерактивні,
        привабливі та функціональні сайти.
      </p>
        </div>
        <div className={css.blockLink}>
            <NavLink className={css.link} to='/'>Previous</NavLink>
            <hr />
            <NavLink className={css.link} to='/usefull'>Next</NavLink>
        </div>
      </div>
    </>
  );
}

export default WebSite;
