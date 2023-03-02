import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { getContacts } from 'redux/contacts/operations';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsSection, List, TitleH2 } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const { isLoggedIn } = useAuth();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(getContacts());
  }, [dispatch, isLoggedIn]);

  const contacts = useSelector(selectFilteredContacts);

  return (
    <ContactsSection>
      <TitleH2>Contacts</TitleH2>
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
    </ContactsSection>
  );
};
