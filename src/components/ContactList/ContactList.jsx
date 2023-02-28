import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { getContacts } from 'redux/operations';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p style={{ color: 'red' }}>
          Sorry, an error occurred! Error: {error}. Please try again later!
        </p>
      )}
      <List>
        {contacts.map(contact => {
          return <ContactItem key={contact.id} contactInfo={contact} />;
        })}
      </List>
    </>
  );
};
