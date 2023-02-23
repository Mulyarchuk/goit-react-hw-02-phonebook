import React from "react";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import PropTypes from 'prop-types';

export const ContactList = ({getVisibleContacts, deleteContact}) =>{
return <ul>
    {getVisibleContacts().map(({id, name, number}) => {
     return   <ContactListItem id={id} name={name} number={number} deleteContact={deleteContact}/>
    })
    }
</ul>
}


ContactList.propTypes={
    getVisibleContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
      }; 
        
