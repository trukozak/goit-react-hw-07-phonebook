import React from 'react';
import { FilterStyled } from './FilterStyled';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';
import { getFilters } from '../../redux/contacts/contactsSelector';

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

const mapStateToProps = state => ({
  filter: getFilters(state),
});

export default connect(mapStateToProps, { changeFilter })(Filter);
