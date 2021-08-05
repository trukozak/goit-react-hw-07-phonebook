import React, { Component } from 'react';
import { AdvFormStyled } from './AdvForm.Styled';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsAction';

const initialState = {
  name: '',
  number: '',
};
class AdvForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();

    const sameContactName = this.props.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase(),
    );
    if (sameContactName) {
      return alert(`${this.state.name} is already in contacts.`);
    }

    this.props.addContact({
      ...this.state,
      id: uuidv4(),
    });
    this.setState({ ...initialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <AdvFormStyled>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              className="inputName"
              type="text"
              name="name"
              pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Number
            <input
              className="inputName"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit" className="btnAdd">
            Add contact
          </button>
        </form>
      </AdvFormStyled>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, { addContact })(AdvForm);
