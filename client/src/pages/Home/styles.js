import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: solid 1px black;
`;

export const Main = styled.div`
  border: solid 1px red;
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;

  /* border: 1px solid yellow; */
`;

export const HeroDisplayMessage = styled.div`
  z-index: 5;
  position: absolute;
  top: 10%;
  right: -20px;

  display: flex;
  gap: 1.75rem;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */

  height: 70%;
  padding: 1rem 2.5rem;

  border-radius: 24px;
  backdrop-filter: blur(2.5px);
  background-color: rgba(222, 222, 222, 0.7);

  & > div {
    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 800;
      /* font-size: 60px; */
      ${({ theme }) => theme.fonts.displayLg}
    }
    p {
      max-width: 80%;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 28px;
      line-height: 38px;
    }
  }
  & > button {
    cursor: pointer;

    font-size: 16px;
    padding: 0.5em 1.5em;

    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.bright};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ArrivalSection = styled.section`
  display: flex;
`;
