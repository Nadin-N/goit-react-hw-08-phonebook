import { PropTypes } from 'prop-types';
import { deleteContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

import {
  ListItem,
  DelBtn,
  ContactName,
  ContactNumber,
} from './ContactItem.styled';

export const ContactItem = ({ contactInfo }) => {
  const { id, name, number } = contactInfo;
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ListItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
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
