import axios from 'axios';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from './contactsAction';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContactsOperations = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
export const addContactOperations = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContactOperation = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// axios.defaults.baseURL = 'https://shopreact-296b9-default-rtdb.firebaseio.com/';
// export const fetchContactsOperations = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts.json');
//     dispatch(
//       fetchContactsSuccess(
//         Object.keys(data).map(key => ({
//           id: key,
//           ...data[key],
//         })),
//       ),
//     );
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };
// export const addContactOperations = contact => async dispatch => {
//   dispatch(addContactRequest());
//   try {
//     const { data } = await axios.post('/contacts.json', contact);
//     dispatch(addContactSuccess({ id: data.name, ...contact }));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// export const deleteContactOperation = id => async dispatch => {
//   dispatch(deleteContactRequest());
//   try {
//     await axios.delete(`/contacts/${id}.json`);
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };
