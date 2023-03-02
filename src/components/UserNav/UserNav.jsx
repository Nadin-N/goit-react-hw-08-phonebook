import { FaUserCheck, FaArrowRight, FaListAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Greeting, LogOutBtn, NavLinkStyled } from './UserNav.styled';

export const UserNav = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <li>
        <NavLinkStyled to="contacts">
          <FaListAlt size="33px" />
          <span> Contacts</span>
        </NavLinkStyled>
      </li>
      <li>
        <Greeting>
          <FaUserCheck size="33px" />
          <span> Welcome, {user.name}!</span>
        </Greeting>
      </li>
      <li>
        <LogOutBtn type="button" onClick={handleLogout}>
          <FaArrowRight size="33px" />
          <span> Log out</span>
        </LogOutBtn>
      </li>
    </>
  );
};
