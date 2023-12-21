import  { Component } from "react";

class ContactForm extends Component {

  state = {
    name: '',
    number: ''
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]:target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // this.props.createContact({
    //   name: this.state.name,
    //   number: this.state.number
    // })
    this.props.createContact(this.state)

    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Name
        <input 
          type="text" 
          name="name" 
          onChange={this.handleChange} 
          value={this.state.name} 
          required />
      </label>
      <label htmlFor="name">Number
        <input 
          type="text" 
          name="number"
          onChange={this.handleChange} 
          value={this.state.number} 
          required />
      </label>
      <button type="submit" >Add contact</button>
    </form>
    )
  }

}

export default ContactForm;