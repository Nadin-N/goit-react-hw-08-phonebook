import styled from 'styled-components';

export const SearchLabel = styled.label`
  line-height: 1.8;
  color: rgb(17, 54, 133);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
  width: 100%;
  @media (min-width: 576px) {
    width: 450px;
  }
`;
export const SearchInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 3px solid rgb(240, 139, 8);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    box-shadow: 2px 4px 2px 2px rgb(205, 156, 92);
  }
`;
