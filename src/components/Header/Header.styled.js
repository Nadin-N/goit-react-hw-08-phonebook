import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  padding: 30px 0;
  background-color: #f08b08;
  box-shadow: 0px 4px 4px 4px #113583;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  transition: color 300ms ease;
  color: #113583;
  text-shadow: 1px 1px 1px #113685;
  &.active {
    color: #f5e1c7;
  }
  &.active h1 {
    color: #f5e1c7;
  }
  &:hover,
  &:focus {
    color: #f5e1c7;
  }
  &:hover h1,
  &:focus h1 {
    color: #f5e1c7;
  }
`;

export const TitleH1 = styled.h1`
  transition: color 300ms ease;

  font-size: 42px;
  font-weight: 700;
  color: rgb(17, 54, 133);
  @media (min-width: 1100px) {
    margin: 0 auto;
  }
`;
export const HeaderBar = styled.ul`
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 700px) {
    font-size: 28px;
    gap: 40px;
  }
`;
