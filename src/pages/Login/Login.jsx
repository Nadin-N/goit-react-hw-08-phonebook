import LoginRegisterForm from 'components/LoginRegisterForm/LoginRegisterForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = formData => {
    dispatch(logIn(formData));
  };

  return (
    <section>
      <LoginRegisterForm onSubmit={handleLogin} isLoginForm />
    </section>
  );
}
export default Login;
