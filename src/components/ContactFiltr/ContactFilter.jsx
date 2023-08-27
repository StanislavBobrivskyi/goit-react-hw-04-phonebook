import React from 'react';
import { InputStyled, Wrapper } from './ContactFilter.stelyd';
export function ContactFilter({ filter, onChangeFilter }) {
  return (
    <Wrapper>
      <p>Find contacts by name</p>
      <InputStyled type="text" value={filter} onChange={onChangeFilter} />
    </Wrapper>
  );
}
