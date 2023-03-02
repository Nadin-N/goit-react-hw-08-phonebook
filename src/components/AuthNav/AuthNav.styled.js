import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
