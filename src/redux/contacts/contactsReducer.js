import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, changeFilter, deleteContact } from './contactsAction';

const contactsItemReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  contacts: contactsItemReducer,
  filter: filterReducer,
});

export default contactsReducer;
