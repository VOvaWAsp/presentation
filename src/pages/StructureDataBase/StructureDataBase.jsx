import { NavLink } from "react-router-dom";
import css from './StructureDataBase.module.css'
import gif from '../../images/data-graphic-animation.gif'
import front from '../../component/fronImg/1_9yHLTwzPgkdxsLoLcE0JIw.png'
import back from '../../component/backImg/img01.jpg'
import data from '../../component/dataBaseImg/multiple-databases-placed-on-relational-600nw-2258134005.webp'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    width: '200px',
    height: '400px'
  }

const fadeImages = [
    { url: front },
    { url: gif },
    { url: data }
];

function StructureDataBase() {
  return (
    <div className={css.containered}>
      <div className={css.container}>
        <div className={css.block}>
          <h2>4. Складові вебсайтів</h2>
          <h2>Фронтенд (зовнішня частина): </h2>
          <p>
          Те, що бачить користувач: дизайн, кнопки, текст, зображення.
          </p>
          <p>
          Основні мови: HTML, CSS, JavaScript.

          </p>
        </div>
        <div className={css.block1}>
          <h2>Бекенд (внутрішня частина):
          </h2>
          <p>
          Логіка, яка працює "за сценою": сервери, бази даних.

          </p>
          <p>
          Основні мови: Python, Java, C#, Node.js, PHP.

          </p>
        </div>
        <div className={css.block2}>
          <h2>База даних: Зберігає інформацію, наприклад, користувацькі акаунти чи відео.
          :</h2>
          <p>
          Приклади: MySQL, MongoDB.
          </p>
        </div>
        <div className={css.blockLink}>
          <NavLink className={css.link} to="/usefull">
            Previous
          </NavLink>
          <hr />
          <NavLink className={css.link} to="/for-example">
            Next
          </NavLink>
        </div>
      </div>
      <div>
      <img width="600px" src={gif} alt="" />
      <AwesomeSlider animation="cubeAnimation">
    <div data-src={front} />
    <div data-src={back} />
    <div data-src={data} />
  </AwesomeSlider>
      </div>
    </div>
  );
}

export default StructureDataBase;
