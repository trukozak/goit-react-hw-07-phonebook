import React from 'react';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsAction';

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()),
        )
        .map(contact => (
          <ContactsListItem
            key={contact.id}
            {...contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateToProps, { onDeleteContact: deleteContact })(
  ContactsList,
);
