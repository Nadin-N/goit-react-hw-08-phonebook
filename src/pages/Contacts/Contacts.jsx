import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container.styled';

function Contacts() {
  return (
    <Container>
      <>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    </Container>
  );
}
export default Contacts;
