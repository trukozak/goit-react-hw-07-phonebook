import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  changeFilter,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from './contactsAction';

const contactsItemReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  contacts: contactsItemReducer,
  filter: filterReducer,
  loading,
});

export default contactsReducer;
