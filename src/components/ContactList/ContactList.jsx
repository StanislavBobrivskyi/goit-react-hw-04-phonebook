import React from 'react';

import {
  ListWrapper,
  ItemStyle,
  DeleteBtn,
  DeleteAllBtn,
} from './ContactList.styled';

export function ContactList({ contacts, onDeleteContact, onDeleteAll }) {
  return (
    <ListWrapper>
      {contacts.map(contact => (
        <ItemStyle key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </ItemStyle>
      ))}
      {contacts.length > 1 && (
        <DeleteAllBtn onClick={onDeleteAll}>Delete All</DeleteAllBtn>
      )}
    </ListWrapper>
  );
}
