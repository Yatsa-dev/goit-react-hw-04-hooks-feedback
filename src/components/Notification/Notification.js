import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <h3 className={s.notification}>{message}</h3>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;