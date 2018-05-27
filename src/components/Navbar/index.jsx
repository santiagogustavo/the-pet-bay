import React from 'react';

import Logo from 'assets/imgs/logo.png';

import { Container, LogoText, UserArea, FaIcon } from './styles';
import { NavbarImg as Img } from '../styles';
import UserDropdown from '../UserDropdown';

const Navbar = () => (
  <Container>
    <LogoText to="/">
      <Img src={Logo} />
      <div>the pet bay</div>
    </LogoText>
    <UserArea>
      <FaIcon className="fas fa-paw" style={{ marginRight: 20 }} />
      <UserDropdown />
    </UserArea>
  </Container>
);

export default Navbar;
