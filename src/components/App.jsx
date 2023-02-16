import React from 'react';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import storage from 'utils/handlers/storage';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle } from './MainTitle/MainTitle';
import { Subtitle } from './Subtitle/Subtitle';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container } from './Container/Container.styled';

export function App() {
  const [contacts, setContacts] = useState(
    () => storage.loadFromLS('contacts-list') ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.saveToLS('contacts-list', contacts);
  }, [contacts]);

  const addContact = contact => {
    const isExist = contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    setContacts(prevState => [finalContact, ...prevState]);
  };

  const handleFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  return (
    <Container className="container">
      <MainTitle title="Phonebook ☎" />
      <ContactForm onAddContact={addContact} />
      <Subtitle subtitle="Contacts" />
      <Filter onFilterChange={handleFilter} valueToFilter={filter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      <GlobalStyle />
    </Container>
  );
}
