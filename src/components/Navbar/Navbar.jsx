import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/imgs/logo.png';

import {
  Container,
  LogoText,
  Name,
  RouterLink,
  SidebarArea,
  UserArea,
  UserContentArea,
  UserDropdownArea,
} from './styles';
import { NavbarImg as Img } from '../styles';
import UserDropdown from '../UserDropdown';
// import UserNotifications from '../UserNotifications';
import UserSidebar from '../UserSidebar';
import DottedIcon from '../DottedIcon';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shrinked: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ shrinked: true });
    } else {
      this.setState({ shrinked: false });
    }
  }

  render() {
    const { signed, name, shopping } = this.props;
    return (
      <Container shrinked={this.state.shrinked}>
        <SidebarArea>
          <UserSidebar />
        </SidebarArea>
        <LogoText to="/">
          <Img src={Logo} />
          <div>the pet bay</div>
        </LogoText>
        <UserArea>
          <UserDropdownArea>
            {signed && <Name>Olá, {name}!</Name>}
            <UserDropdown shrinked={this.state.shrinked} />
          </UserDropdownArea>
          {signed &&
            <UserContentArea>
              {/* <UserNotifications shrinked={this.state.shrinked} /> */}
              <RouterLink to="/shopping-cart">
                <DottedIcon
                  icon="fas fa-shopping-cart"
                  count={shopping}
                  style={{ marginLeft: 20 }}
                />
              </RouterLink>
            </UserContentArea>
          }
        </UserArea>
      </Container>
    );
  }
}

Navbar.propTypes = {
  signed: PropTypes.bool,
  name: PropTypes.string,
  shopping: PropTypes.number,
};

Navbar.defaultProps = {
  signed: false,
  name: '',
  shopping: 0,
};

export default Navbar;
