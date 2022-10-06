import styled from 'styled-components';

import { RiSearchLine } from 'react-icons/ri';

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 40px;
  width: 50%;
  padding: 0.4rem;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray};

  & input {
    width: 100%;
    font-size: 14px;
    padding-left: 0.5rem;

    border: none;
    outline: none;
    background-color: transparent;
  }

  i > svg {
    height: 24px;
    width: 24px;
  }
`;

function InputSearch() {
  return (
    <InputWrapper>
      <i>
        <RiSearchLine />
      </i>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search products or brands..."
      />
    </InputWrapper>
  );
}

export default InputSearch;
