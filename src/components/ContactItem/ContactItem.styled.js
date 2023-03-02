import styled from 'styled-components';

export const ListItem = styled.li`
  width: 100%;
  @media (min-width: 520px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ContactInfo = styled.div`
  flex-basis: 75%;
  max-width: 100%;
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
  @media (min-width: 520px) {
    margin-bottom: 0;
    gap: 0;
  }
`;

export const ContactName = styled.div`
  flex-basis: 60%;
  color: rgb(17, 54, 133);
  font-weight: 500;
  @media (min-width: 520px) {
    font-size: 20px;
    flex-basis: 60%;
  }
`;
export const ContactNumber = styled.div`
  flex-basis: 40%;
  color: rgb(240, 139, 8);
  text-shadow: 1px 1px 1px rgb(17, 54, 133);
  font-weight: 500;
  @media (min-width: 520px) {
    font-size: 20px;
  }
`;

export const DelBtn = styled.button`
  width: 70px;
  padding: 10px;
  border-radius: 5px;
  border: 3px solid rgb(17, 54, 133);
  font-weight: 500;
  color: rgb(17, 54, 133);
  background-color: rgb(240, 139, 8);
  &:hover {
    box-shadow: 2px 4px 6px 2px rgb(17, 54, 133);
  }
  @media (min-width: 520px) {
    font-size: 20px;
    width: 100px;
  }
`;
