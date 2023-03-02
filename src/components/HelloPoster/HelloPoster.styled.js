import styled from 'styled-components';

export const WelcomeSection = styled.section`
  margin-top: 50px;
  text-align: center;
`;
export const WelcomeMessage = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  @media (min-width: 700px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
`;
export const ImageWrap = styled.div`
  display: inline-block;
  max-width: 1000px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const WelcomeImage = styled.img`
  object-fit: contain;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
