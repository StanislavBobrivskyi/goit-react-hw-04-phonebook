import React from 'react';
import { ItemStyle, DeleteBtn } from './ContactList.styled';

export function ContactListItem({ contact, onDeleteContact }) {
  return (
    <ItemStyle>
      {contact.name}: {contact.number}
      <DeleteBtn onClick={() => onDeleteContact(contact.id)}>Delete</DeleteBtn>
    </ItemStyle>
  );
}
