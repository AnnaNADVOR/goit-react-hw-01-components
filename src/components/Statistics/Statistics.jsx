import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import baseCss from '../../idex.module.css';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function Statistics({ title, stats }) {
    return (
        <section className={css.section}>
            {title && (<h2 className={css.title}>{title}</h2>)}
                <ul className={baseCss.list}>
                    {stats.map(el => (
                        <li className={`${baseCss.item} ${css.item}`} style={{backgroundColor: getRandomHexColor()}} key={el.id}>
                        <span className={css.label}>{el.label}</span>
                        <span className={css.percentage}>{el.percentage}%</span>
                    </li>))}      
                </ul>
        </section>
    )
}

Statistics.propTypes = { 
    title: PropTypes.string, 
    stats: PropTypes.array,
    
}

