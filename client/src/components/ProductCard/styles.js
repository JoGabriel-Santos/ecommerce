import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;

  text-transform: capitalize;

  /* border: 1px solid black; */
`;

export const Display = styled.div`
  position: relative;
  width: 150px;
  height: 150px;

  /* border: 1px solid green; */
`;

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.highEmphasy};

  /* border: 1px solid red; */
`;

export const Tag = styled.span`
  pointer-events: none;
  position: absolute;
  top: 2%;
  right: 2%;

  padding: 0.5em;
  font-size: 12px;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.bright};
  background-color: ${({ theme }) => theme.colors.highlight};
`;

export const Img = styled.img`
  block-size: auto;
  max-inline-size: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.highEmphasy};
`;

export const Description = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lowEmphasy};
`;

export const Rating = styled.div``;
export const Stars = styled.span``;
export const Ratings = styled.p``;

export const DisplayPrice = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  & > p:nth-child(1) {
    font-size: 14px;
    font-weight: 600;
  }
  & > p:nth-child(2) {
    font-size: 10px;
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.lightText};
  }
  & > p:nth-child(3) {
    font-size: 10px;
    color: #e21d1d;
  }
`;

export const CartButton = styled.button`
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  padding: 0.25em;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bright};
`;
