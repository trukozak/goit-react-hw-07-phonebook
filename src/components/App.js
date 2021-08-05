import React from 'react';

import AdvForm from './Admin/AdvForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <AdvForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
