import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highEmphasy};

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledLink;
