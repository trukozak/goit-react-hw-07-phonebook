import React from 'react';
import PropTypes from 'prop-types';
import { ContactsListItemStyled } from './ContactsListItemStyled';

const ContactsListItem = ({ name, number, id, onDeleteContact }) => {
  const onDeleteItem = () => {
    onDeleteContact(id);
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

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
