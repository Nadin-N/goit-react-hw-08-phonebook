import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Notiflix from 'notiflix';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import {
  Form,
  FormLabel,
  FormInput,
  AddButton,
  TitleH2,
  AddSection,
} from './ContactForm.styled';

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const createContact = e => {
    e.preventDefault();
    const isExist = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      resetForm();
      return;
    }
    dispatch(addContacts({ name, number }));

    resetForm();
  };

  return (
    <AddSection>
      <TitleH2>Add contact</TitleH2>
      <Form onSubmit={createContact}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="John Smith"
            onChange={inputChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+380678889900"
            onChange={inputChange}
          />
        </FormLabel>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </AddSection>
  );
}
