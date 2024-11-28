import { NavLink } from 'react-router-dom';
import css from './Usefull.module.css'

function Usefull() {
    return (
       <>
        <div className={css.container}>
        <img
          className={css.img}
          src="https://www.shutterstock.com/image-vector/concept-web-design-website-page-260nw-1939082209.jpg"
          alt="Website Development"
        />
            <div className={css.block}>
                <h2>3. Зручність використання сайтів</h2>
                <h2>Доступність:</h2>
                <p>Сайти працюють на різних пристроях: комп’ютерах, планшетах, смартфонах.</p>
            </div>
            <div className={css.block1}>
                <h2>Простота:</h2>
                <p>Зрозумілий інтерфейс дозволяє користувачам швидко знайти потрібну інформацію.</p>
            </div>
            <div className={css.block2}>
                <h2>Різноманітність:</h2>
                <p>Сайти пропонують різні функції — від відео (YouTube) до музики (YouTube Music) та онлайн-покупок.</p>
            </div>
            <div className={css.blockLink}>
            <NavLink className={css.link} to='/web-site'>Previous</NavLink>
            <hr />
            <NavLink className={css.link} to='/structure-data-base'>Next</NavLink>
        </div>
        </div>
        </>
    )
}

export default Usefull;