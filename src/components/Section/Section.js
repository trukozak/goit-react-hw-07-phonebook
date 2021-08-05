import React from 'react';
import { SectionStyled } from './SectionStyled';

const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      <h2 className="sectionTitle">{title.toUpperCase()}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;
