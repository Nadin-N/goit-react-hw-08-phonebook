import styled from 'styled-components';

export const ListItem = styled.li`
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  @media (min-width: 476px) {
  }
`;
export const DelBtn = styled.button`
  width: 70px;
  padding: 10px;
  border-radius: 5px;
  border: 3px solid rgb(17, 54, 133);
  font-size: 14px;
  font-weight: 500;
  color: rgb(17, 54, 133);
  background-color: rgb(240, 139, 8);
  &:hover {
    box-shadow: 2px 4px 6px 2px rgb(17, 54, 133);
  }
  @media (min-width: 476px) {
    font-size: 20px;
    width: 100px;
  }
`;
export const ContactName = styled.span`
  color: rgb(17, 54, 133);
  text-shadow: 1px 1px 1px rgb(240, 139, 8);
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 476px) {
    font-size: 20px;
  }
`;
export const ContactNumber = styled.span`
  color: rgb(240, 139, 8);
  text-shadow: 1px 1px 1px rgb(17, 54, 133);
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 476px) {
    font-size: 20px;
  }
`;
