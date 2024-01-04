import PropTypes from 'prop-types';
import { ContactListButton, ContactListItem, ContactListStyled } from './ContactList.styled';


const ContactList = ({contacts, onDeleteContact}) => (
  <ContactListStyled>
    {contacts.map(({id, name, number}) => (
      <ContactListItem key={id}>
        <p >{name}: {number}</p>
        <ContactListButton type="button" onClick={()=> onDeleteContact(id)}>Delete</ContactListButton>
      </ContactListItem>
    ))}
  </ContactListStyled>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;