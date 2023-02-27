import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63fd02b08ef914c555a40820.mockapi.io/';

export const getContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContacts = createAsyncThunk('contacts/add', async contact => {
  const response = await axios.post('/contacts', contact);

  return response.data;
});

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);

    return response.data;
  }
);
