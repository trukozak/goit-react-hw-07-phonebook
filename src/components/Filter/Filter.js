import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyled } from './FilterStyled';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';

const Filter = ({ filter, changeFilter }) => {
  const onChange = e => {
    changeFilter(e.target.value);
  };
  return (
    <FilterStyled>
      <label className="labelFilter">
        Find contacts by name:
        <input
          className="inputFilter"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </FilterStyled>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { changeFilter })(Filter);
