import { FaRegUser, FaUserPlus } from 'react-icons/fa';
import { NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <li>
        <NavLinkStyled to="login">
          <FaRegUser size="33px" />
          <p>Login</p>
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="register">
          <FaUserPlus size="40px" />
          <p>Register</p>
        </NavLinkStyled>
      </li>
    </>
  );
};
