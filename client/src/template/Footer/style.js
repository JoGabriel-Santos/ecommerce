import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: 1fr; */
  width: 100%;
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FooterSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  padding: 1rem 0rem;

  border: 1px solid yellow;
`;

export const FooterLinks = styled.div`
  padding: 0rem 0.5rem;
  border: 1px solid white;
`;

export const FooterTitle = styled.h5``;

export const FooterSocialSection = styled.div``;
