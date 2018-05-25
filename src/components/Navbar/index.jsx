import React from 'react';
import { Container, LogoText, Img, UserArea, FaIcon } from './styles';
import Logo from '../../imgs/logo.png';
import User from '../../imgs/user.png';

const Navbar = () => (
  <Container>
    <LogoText to="/">
      <Img src={Logo} />
      <div>the pet bay</div>
    </LogoText>
    <UserArea>
      <FaIcon className="fas fa-paw" style={{ marginRight: 20 }} />
      <Img src={User} />
    </UserArea>
  </Container>
);

export default Navbar;
