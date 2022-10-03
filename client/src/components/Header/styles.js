import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  /* max-width: 1280px; */

  border: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50%;
  border: 1px solid red;

  ul {
    display: flex;
    gap: 18px;

    border: 1px solid yellow;
  }
`;

export const Search = styled.div`
  display: flex;
  max-width: 30%;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.font.large}
`;
