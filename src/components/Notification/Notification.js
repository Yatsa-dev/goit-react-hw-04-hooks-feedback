import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification  ({ message }) {
  return (
    <h3 className={s.notification}>{message}</h3>
  )
};
  
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
