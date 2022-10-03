import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;

  font-weight: 500;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.highEmphasy};

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledLink;
