import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper, Dim } from './styles';

const Sidebar = ({ children, open }) => (
  <div>
    <Dim visible={open} />
    <Container open={open}>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool,
};

Sidebar.defaultProps = {
  open: false,
};

export default Sidebar;
