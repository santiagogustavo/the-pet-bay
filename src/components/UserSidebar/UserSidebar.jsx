import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Menu, NavLink, ButtonItem, MenuBars,
} from './styles';

import ClickOutside from '../ClickOutside';
import Sidebar from '../Sidebar';

class UserSidebar extends React.Component {
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
        <MenuBars className="fas fa-bars fa-lg" onClick={this.handleOnClick} />
        <Sidebar open={this.state.open}>
          {
            this.props.signed ?
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
                <ButtonItem onClick={this.props.signOut}>
                  <i className="fas fa-sign-out-alt" />
                  Sair
                </ButtonItem>
              </Menu>
            :
              <Menu>
                <NavLink to="/sign-in">
                  <i className="fas fa-sign-in-alt" />
                  Entrar
                </NavLink>
                <NavLink to="/sign-up">
                  <i className="fas fas fa-user-plus" />
                  Criar conta
                </NavLink>
              </Menu>
          }
        </Sidebar>
      </Container>
    </ClickOutside>
  );
}

UserSidebar.propTypes = {
  signed: PropTypes.bool,
  signOut: PropTypes.func.isRequired,
};

UserSidebar.defaultProps = {
  signed: false,
};

export default UserSidebar;
