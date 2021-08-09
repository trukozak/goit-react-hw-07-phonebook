import React from 'react';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import { connect } from 'react-redux';
import {
  getContactsFiltered,
  getLoadings,
} from '../../redux/contacts/contactsSelector';

const ContactsList = ({ contacts, loading }) => {
  return (
    <>
      {loading ? (
        <h2>Loading Contacts...</h2>
      ) : (
        <ul>
          {contacts.map(contact => (
            <ContactsListItem key={contact.id} {...contact} id={contact.id} />
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  contacts: getContactsFiltered(state),
  loading: getLoadings(state),
});

export default connect(mapStateToProps)(ContactsList);
