import React from 'react';
import { Container, LogoText, UserArea, FaIcon } from './styles';
import { NavbarImg as Img } from '../styles';
import UserDropdown from '../UserDropdown';
import Logo from '../../imgs/logo.png';

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
