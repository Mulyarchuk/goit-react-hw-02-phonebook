import React from "react";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css';

export class ContactForm extends React.Component{
    state = {
        contacts: [],
        name: '',
        number: ``,
        
      };
    handleChange = e =>{
        const {name, value}=e.currentTarget
        this.setState({[name]: value})
      };
    
    handleSubmit = e =>{
        e.preventDefault();
        this.reset();
        const contact = {
            name: this.state.name,
            number: this.state.number,
            id: nanoid(),
          };
        this.props.addContact(contact);
      };

    reset = () => {
        this.setState({
            name: '',
            number: `` 
        })
      }

    render(){
        const {name, number} =this.state; 
        return (
        <form className={css.contact__form}onSubmit={this.handleSubmit}>
        <label >
          Name <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </label>
        Number <input
        type="tel"
        name="number"
        value={number}
        onChange={this.handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
/>
        <button type="submit">Add contact</button>
      </form>)
      }
      
}