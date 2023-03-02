import LoginRegisterForm from 'components/LoginRegisterForm/LoginRegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

function Register() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    dispatch(register(formData));
  };
  return (
    <section>
      <LoginRegisterForm onSubmit={handleRegister} />
    </section>
  );
}
export default Register;
