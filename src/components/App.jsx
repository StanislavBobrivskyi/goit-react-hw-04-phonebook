import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFiltr/ContactFilter';

const localStorageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteAllContacts = () => {
    this.setState({
      contacts: [],
      filter: '',
    });
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(localStorageKey);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: newContacts } = this.state;
    if (newContacts !== prevContacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(newContacts));
    }
  }

  handleAddContact = values => {
    const { name, number } = values;

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    const newContact = {
      id: nanoid(),

      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <ContactFilter
          filter={filter}
          onChangeFilter={this.handleChangeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
          onDeleteAll={this.deleteAllContacts}
        />
      </div>
    );
  }
}
