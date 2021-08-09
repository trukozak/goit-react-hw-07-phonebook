import React from 'react';
import { connect } from 'react-redux';
import { deleteContactOperation } from '../../../redux/contacts/contactsOperations';
import { ContactsListItemStyled } from './ContactsListItemStyled';

const ContactsListItem = ({ name, number, id, deleteContactOperation }) => {
  const onDeleteItem = () => {
    deleteContactOperation(id);
  };

  return (
    <ContactsListItemStyled>
      <li>
        {name}
        <span>: </span>
        {number}
        <button className="btnDelete" type="button" onClick={onDeleteItem}>
          Delete
        </button>
      </li>
    </ContactsListItemStyled>
  );
};

export default connect(null, { deleteContactOperation })(ContactsListItem);
