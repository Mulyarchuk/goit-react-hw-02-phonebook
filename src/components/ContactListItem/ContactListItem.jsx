import React from "react";
import PropTypes from 'prop-types';

export const ContactListItem =({id,name,number,deleteContact}) =>{
    return  (
        <li key={id}>
            <p>{name}:{number}</p>
        <button type="button" onClick={() =>{deleteContact(id)}}>Delete</button>
        </li>)
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };