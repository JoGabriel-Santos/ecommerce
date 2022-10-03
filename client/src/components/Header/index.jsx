import React from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';

import Link from '../Link';
import InputSearch from '../InputSearch';

import { Container, Nav, Logo, SearchWrapper, IconWrapper } from './styles';

function Header() {
  return (
    <Container>
      <Nav>
        <Logo>CORA`L</Logo>
        <ul>
          <Link href="index">Handbags</Link>
          <Link href="index">Watches</Link>
          <Link href="index">Skincare</Link>
          <Link href="index">Jewellery</Link>
          <Link href="index">Apparels</Link>
        </ul>
      </Nav>
      <SearchWrapper>
        <InputSearch />
        <IconWrapper>
          <i>
            <AiOutlineHeart />
          </i>
          <i>
            <MdPersonOutline />
          </i>
          <i>
            <FiShoppingBag />
          </i>
        </IconWrapper>
      </SearchWrapper>
    </Container>
  );
}

export default Header;
