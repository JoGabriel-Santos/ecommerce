import React from 'react';

import { Container, Nav, Logo, Search } from './styles';
import Link from '../Link';

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
      <Search>
        <input type="search" />
        <i>i1</i>
        <i>i2</i>
        <i>i3</i>
      </Search>
    </Container>
  );
}

export default Header;
