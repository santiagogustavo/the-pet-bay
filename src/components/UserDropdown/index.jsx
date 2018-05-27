import React from 'react';

import { Container, Menu, NavLink } from './styles';
import { NavbarImg as Img } from '../styles';

import ClickOutside from '../ClickOutside';
import Dropdown from '../Dropdown';
import User from '../../imgs/user.png';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOnClick = () => {
    this.setState({ open: !this.state.open });
  }

  handleOnClickOutside = () => {
    this.setState({ open: false });
  }

  render = () => (
    <ClickOutside onClickOutside={this.handleOnClickOutside}>
      <Container>
        <Img src={User} onClick={this.handleOnClick} />
        <Dropdown open={this.state.open}>
          <Menu>
            <NavLink to="/my-pets">
              <i className="fas fa-paw" />
              Meus Pets
            </NavLink>
            <NavLink to="/my-calendar">
              <i className="far fa-calendar" />
              Minha Agenda
            </NavLink>
            <NavLink to="/my-account">
              <i className="fas fa-user" />
              Minha Conta
            </NavLink>
            <NavLink to="/">
              <i className="fas fa-sign-out-alt" />
              Sair
            </NavLink>
          </Menu>
        </Dropdown>
      </Container>
    </ClickOutside>
  );
}

export default UserDropdown;
