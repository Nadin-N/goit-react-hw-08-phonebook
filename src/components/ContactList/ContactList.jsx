import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts, getIsLoading } from 'redux/selectors';
import { getContacts } from 'redux/operations';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {contacts.map(contact => {
          return <ContactItem key={contact.id} contactInfo={contact} />;
        })}
      </List>
    </>
  );
};
