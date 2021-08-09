import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilters = state => state.filter;
export const getLoadings = state => state.loading;

export const getContactsFiltered = createSelector(
  [getContacts, getFilters],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
