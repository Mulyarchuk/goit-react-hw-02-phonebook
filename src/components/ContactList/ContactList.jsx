import React from "react";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import PropTypes from 'prop-types';

export const ContactList = ({contacts, deleteContact}) =>{
return <ul>
    {contacts.map(({id, name, number}) => {
     return   <ContactListItem id={id} name={name} number={number} deleteContact={deleteContact}/>
    })
    }
</ul>
}


ContactList.propTypes={
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })).isRequired,
        deleteContact: PropTypes.func.isRequired,
      }; 
        
