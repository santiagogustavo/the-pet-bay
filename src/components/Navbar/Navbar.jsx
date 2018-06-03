import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/imgs/logo.png';

import {
  Container, LogoText, UserArea, UserContentArea, SidebarArea, Name,
} from './styles';
import { NavbarImg as Img } from '../styles';
import UserDropdown from '../UserDropdown';
import UserNotifications from '../UserNotifications';
import UserSidebar from '../UserSidebar';
import DottedIcon from '../DottedIcon';

const Navbar = ({ signed, name }) => (
  <Container>
    <SidebarArea>
      <UserSidebar />
    </SidebarArea>
    <LogoText to="/">
      <Img src={Logo} />
      <div>the pet bay</div>
    </LogoText>
    <UserArea>
      { signed && <Name>Olá, {name}!</Name> }
      <UserDropdown />
      { signed &&
        <UserContentArea>
          <UserNotifications />
          <DottedIcon icon="fas fa-shopping-cart" count={3} style={{ marginLeft: 20 }} />
        </UserContentArea>
      }
    </UserArea>
  </Container>
);

Navbar.propTypes = {
  signed: PropTypes.bool,
  name: PropTypes.string,
};

Navbar.defaultProps = {
  signed: false,
  name: '',
};

export default Navbar;
