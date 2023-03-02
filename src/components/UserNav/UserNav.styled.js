import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Greeting = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #113583;
`;
export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 300ms ease;
  fill: #113583;
  &.active {
    color: #f5e1c7;
    fill: #f5e1c7;
  }
  &:hover,
  &:focus {
    color: #f5e1c7;
  }
`;

export const HeaderBar = styled.ul`
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (min-width: 700px) {
    font-size: 28px;
    gap: 40px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 7px;
  transition: color 300ms ease;
  &.active {
    color: #f5e1c7;
  }
  &:hover,
  &:focus {
    color: #f5e1c7;
  }
`;
