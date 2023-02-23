import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }; 


 addContact = text =>{
  if (this.state.contacts.find(contact=> contact.name.toLowerCase() === text.name.toLowerCase())){
    alert (`${text.name} is already in contacts.`);
    return;
  }
  this.setState(prevState=>({
    contacts: [text,...prevState.contacts]
  }));
 } ;

deleteContact = contactId =>{
  this.setState (prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
};

changeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
};

filterContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
}

render(){
  const { contacts, filter } = this.state;
    const filtered = this.filterContacts(contacts, filter);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  addContact={this.addContact}/>
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>
      <ContactList contacts={filtered} deleteContact={this.deleteContact} />
    </div>
  );
    };
};
