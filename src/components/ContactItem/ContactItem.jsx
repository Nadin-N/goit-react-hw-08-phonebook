import { PropTypes } from 'prop-types';
import { deleteContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

import {
  ListItem,
  DelBtn,
  ContactName,
  ContactNumber,
  ContactInfo,
} from './ContactItem.styled';

export const ContactItem = ({ contactInfo }) => {
  const { id, name, number } = contactInfo;
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ListItem>
      <ContactInfo>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactInfo>

      <DelBtn onClick={() => handleDelete(id)}>Delete</DelBtn>
    </ListItem>
  );
};

ContactItem.prototype = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string || PropTypes.number.isRequired,
  }).isRequired,
};
