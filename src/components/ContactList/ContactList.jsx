import PropTypes from 'prop-types';
import { ContactListStyled } from './ContactList.styled';
import Contact from 'components/Contact/Conctact';


const ContactList = ({contacts, onDeleteContact}) => (
  <ContactListStyled>
    {contacts.map(({id, name, number}) => (
      <Contact key={id}
      id={id}
      name={name}
      number={number}
      onDeleteContact={onDeleteContact}
      />
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