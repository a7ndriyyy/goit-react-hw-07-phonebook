import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts, addContact } from 'redux/Contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Filter } from './Filter/Filter';
import css from 'App.module.css';

export function App() {
  const { isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const contacts = useSelector(addContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) return alert(`${error} error`);
  }, [error]);

  return (
    <section className={css.content}>
      <div className={css.content__container}>
        <ContactForm />
        <h2 className={css.Contacts}>Contacts</h2>
        {!isLoading && contacts.length > 0 && <Filter />}
        {!isLoading && contacts.length > 0 && <ContactList />}
      </div>
    </section>
  );
}
