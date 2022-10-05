import styled from 'styled-components';

export const Container = styled.footer`
  /* position: fixed; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  padding: 2rem 1rem 4rem 1rem;

  color: ${({ theme }) => theme.colors.bright};
  background-color: ${({ theme }) => theme.colors.primary};

  /* border: 1px solid red; */
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

export const FooterSocialSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  padding: 2rem 4rem 0 0;

  /* border: 1px solid white; */
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 12px;
`;

export const FooterCopy = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-end;

  & > div {
    display: flex;
    gap: 8px;
    p {
      color: ${({ theme }) => theme.colors.bright};
    }
  }
  p {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const FooterSocialBtn = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4em;
  border: none;
  border-radius: 100%;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryTint};

  & > svg {
    height: 25px;
    width: 25px;
  }
`;
