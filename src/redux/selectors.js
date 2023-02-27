import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filterValue;
export const getIsLoading = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    //  console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
