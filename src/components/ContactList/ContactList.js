import React from "react";
import PropTypes from "prop-types";

import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleClick }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}:{number}
        <button
          type="button"
          className={s.buttonDelete}
          onClick={() => handleClick(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
