import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
  }

  createContact = (data) => {
    const newContact = {
      ...data,
      id: nanoid()
    }
    console.log(newContact);
  }

  render() {
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
      <div>
          <h2>Contacts</h2>
            <ul>

            </ul>
      </div>  
       
      </div>
    );
  };
  }

  export default App;
  
