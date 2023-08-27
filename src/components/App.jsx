import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFiltr/ContactFilter';

const localStorageKey = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = values => {
    const { name, number } = values;

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const deleteAllContacts = () => {
    setContacts([]);
    setFilter('');
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem(localStorageKey);
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <ContactFilter filter={filter} onChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
        onDeleteAll={deleteAllContacts}
      />
    </div>
  );
};
