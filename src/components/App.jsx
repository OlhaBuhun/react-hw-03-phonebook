import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  createContact = (data) => {
    const newContact = {
      ...data,
      id: nanoid()
    }
    
    this.setState(({contacts}) => ({
      contacts: [newContact, ...contacts] 
    }))
  }

  deleteContact = (contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  })

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value});
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const {  filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onCangeFiler={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
       
      </div>
    );
  };
  }

  export default App;
  
