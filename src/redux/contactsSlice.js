import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  //   reducers: {
  //     addContact(state, { payload }) {
  //       state.contacts = [payload, ...state.contacts];
  //       console.log(payload);
  //     },
  //     deleteContact(state, { payload }) {
  //       state.contacts = state.contacts.filter(contact => contact.id !== payload);
  //       console.log(payload);
  //     },
  //   },
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = [...payload].reverse();
      // console.log(payload);
      state.isLoading = false;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addContacts.pending]: state => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.contacts = [payload, ...state.contacts];
      state.isLoading = false;
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteContacts.pending]: state => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
      state.isLoading = false;
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

// export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
