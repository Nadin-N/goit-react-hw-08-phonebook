import { Outlet } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  TitleH1,
  Nav,
  PageHeader,
  HeaderBar,
  NavLinkStyled,
} from './Header.styled';

import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Container/Container.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <PageHeader>
        <Container>
          <Nav>
            <NavLinkStyled to="/">
              <FaPhoneAlt size="50px" />
              <TitleH1>Phonebook </TitleH1>
            </NavLinkStyled>
            <HeaderBar>{isLoggedIn ? <UserNav /> : <AuthNav />}</HeaderBar>
          </Nav>
        </Container>
      </PageHeader>
      <Outlet />
    </>
  );
};
