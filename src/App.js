import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form/Form";
import Title from "./components/Title/Title";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import DataContacts from "./components/DataContacts/DataContacts.json";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? DataContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} already exsist at phonebook `);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts((prevContacts) => [contact, ...prevContacts]);
  };
  const handleRemove = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };
  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      {contacts.length ? <Title title="Contacts" /> : null}
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts()} handleClick={handleRemove} />
    </div>
  );
}
