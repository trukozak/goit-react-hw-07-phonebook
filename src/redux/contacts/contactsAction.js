import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('fetchContactsRequest');
export const fetchContactsSuccess = createAction('fetchContactsSuccess');
export const fetchContactsError = createAction('fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest =');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
