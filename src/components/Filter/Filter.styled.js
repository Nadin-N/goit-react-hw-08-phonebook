import styled from 'styled-components';

export const FilterSection = styled.section`
  margin: 70px auto 0;
  @media (min-width: 576px) {
    width: 450px;
  }
`;

export const TitleH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: rgb(17, 54, 133);
  margin-bottom: 40px;

  @media (min-width: 476px) {
    font-size: 38px;
  }
`;

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
