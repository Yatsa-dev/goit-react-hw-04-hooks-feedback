import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function Feedback  ({ options, onLeaveFeedback })  {
  return(
    <>
    {options.map(option => (
      <button
        className={s.btn}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </>
  )};

Feedback.prototype = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};


