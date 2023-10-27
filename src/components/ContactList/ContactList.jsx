import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactsItem';

export const ContactList = ({ children }) => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const getFilterContacts = () => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterContacts();

  return (
    <div className={css.contacts}>
      <ul className={css.contacts__list}>
        {children}
        {filteredContacts.map(({ name, id, number }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
      </ul>
    </div>
  );
};
