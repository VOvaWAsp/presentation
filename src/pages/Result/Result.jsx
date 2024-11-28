import { NavLink } from "react-router-dom";
import css from "./Result.module.css";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import gif from '../../images/data-graphic-animation.gif'
import front from '../../component/fronImg/1_9yHLTwzPgkdxsLoLcE0JIw.png'
import back from '../../component/backImg/img01.jpg'
import data from '../../component/dataBaseImg/multiple-databases-placed-on-relational-600nw-2258134005.webp'


function Result() {
  return (
    <div className={css.containered}>
      <div className={css.container}>
        <div className={css.block}>
          <h2>7. Висновок</h2>
          <h2>YouTube:</h2>
          <p>Вебсайти — це результат об’єднання дизайну, програмування та інновацій. Вони полегшують доступ до знань, розваг і спілкування. Розвиток технологій, таких як JavaScript та серверні двигуни (V8), дозволяє створювати ще зручніші та функціональніші вебплатформи.</p>
        </div>
        <div className={css.blockLink}>
          <NavLink className={css.link} to="/youtubes">
            Previous
          </NavLink>
        </div>
      </div>
      <div>
      <img
          width="700px"
          src="https://cdn6.aptoide.com/imgs/d/1/e/d1e11e70ba9497a332a03630ad6a5b83_fgraphic.png"
          alt=""
        />      <AwesomeSlider animation="cubeAnimation">
    <div data-src='https://storage.googleapis.com/gd-prod/images/f4f4bc5f-904a-4b61-972f-c403bc060679.799a99c1196c2fd4.webp' />
    <div data-src='https://cdn6.aptoide.com/imgs/d/1/e/d1e11e70ba9497a332a03630ad6a5b83_fgraphic.png' />
    <div data-src='https://www.pcwelt.de/wp-content/uploads/2024/02/shutterstock_2290358085.jpg?quality=50&strip=all&w=1024' />
    <div data-src='https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg' />
  </AwesomeSlider>
      </div>
    </div>
  );
}

export default Result;
