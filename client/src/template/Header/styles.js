import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  /* max-width: 1280px; */
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.DisplayLg}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 48%;

  ul {
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.colors.highEmphasy};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  width: 48%;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;

  color: ${({ theme }) => theme.colors.primary};

  i > svg {
    width: 24px;
    height: 24px;
  }
`;
