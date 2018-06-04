import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Container, Menu, ButtonItem } from './styles';

import DottedIcon from '../DottedIcon';
import ClickOutside from '../ClickOutside';
import Dropdown from '../Dropdown';

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
      <Container style={{ marginLeft: 20 }} >
        <DottedIcon icon="fas fa-bell" count={1} onClick={this.handleOnClick} />
        <Dropdown open={this.state.open} title="Notificações" shrinked={this.props.shrinked}>
          <Menu>
            {this.props.notifications.map((item, index) => (
              <ButtonItem key={_.uniqueId(index)}>
                <i className="fas fa-calendar" />
                <div>{item.content}</div>
              </ButtonItem>
            ))}
          </Menu>
        </Dropdown>
      </Container>
    </ClickOutside>
  );
}

UserDropdown.propTypes = {
  shrinked: PropTypes.bool,
  notifications: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
  })),
};

UserDropdown.defaultProps = {
  shrinked: false,
  notifications: [
    {
      content: ' Jonas, o gato, tem uma consulta agendada para o dia 10/04/2018!',
    },
  ],
};

export default UserDropdown;
