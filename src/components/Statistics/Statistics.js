import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li className={s.statistics}>Good: {good}</li>
        <li className={s.statistics}>Neutral: {neutral}</li>
        <li className={s.statistics}>Bad: {bad}</li>
        <li className={s.statistics}>Total: {total}</li>
        <li className={s.statistics}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;