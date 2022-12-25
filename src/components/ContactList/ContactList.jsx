import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css';



export default function ContactList({ contacts, onDelete }) {
  return (
    <ol className={styles.list}>
      {contacts.map(el => (
        <li key={el.id}>
          <p className={styles.posBtn}>
            <span className={styles.text}>
              {el.name}: {el.number}
            </span>
            <button
              type="button"
              onClick={() => onDelete(el.id)}
              className={styles.btn}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ol>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};