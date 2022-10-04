import styled from 'styled-components';

export const Container = styled.footer`
  /* position: fixed; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  padding: 2rem 1rem 4rem 1rem;

  color: ${({ theme }) => theme.colors.bright};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FooterSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  /* border: 1px solid yellow; */
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
export const LinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.lightText};
  ${({ theme }) => theme.fonts.bodyMd}
`;

export const FooterTitle = styled.h5`
  ${({ theme }) => theme.fonts.bodyMd}
`;

export const FooterSocialSection = styled.div``;
