import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle } from './MainTitle/MainTitle';
import { Subtitle } from './Subtitle/Subtitle';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container } from './Container/Container.styled';

export function App() {
  return (
    <Container className="container">
      <MainTitle title="Phonebook ☎" />
      <ContactForm />
      <Subtitle subtitle="Contacts" />
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
}
