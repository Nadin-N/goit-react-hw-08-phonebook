import { useRef } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  FormLabel,
  FormInput,
  AddButton,
  TitleH2,
  AddSection,
} from './LoginRegisterForm.styled';
import { Container } from 'components/Container/Container.styled';

function LoginRegisterForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const createUserData = e => {
    e.preventDefault();
    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    e.target.reset();
  };

  return (
    <AddSection>
      <Container>
        <TitleH2>{isLoginForm ? 'Login' : 'Register'}</TitleH2>
        <Form onSubmit={createUserData}>
          {isLoginForm ? null : (
            <FormLabel>
              <span> Name</span>
              <FormInput
                type="text"
                name="name"
                placeholder="John Smith"
                required
                ref={nameInputRef}
              />
            </FormLabel>
          )}
          <FormLabel>
            <span> Email</span>

            <FormInput
              type="email"
              name="email"
              placeholder="mail@gmail.com"
              required
              ref={emailInputRef}
            />
          </FormLabel>
          <FormLabel>
            <span> Password</span>
            <FormInput
              type="password"
              name="password"
              placeholder="any"
              required
              ref={passwordInputRef}
            />
          </FormLabel>
          <AddButton type="submit">
            {isLoginForm ? 'Log In' : 'Register'}
          </AddButton>
        </Form>
      </Container>
    </AddSection>
  );
}

LoginRegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginRegisterForm;
