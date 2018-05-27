import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './styles';

const Dropdown = ({ children, open }) => (
  <Container open={open}>
    <Wrapper>
      {children}
    </Wrapper>
  </Container>
);

Dropdown.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool,
};

Dropdown.defaultProps = {
  open: false,
};

export default Dropdown;
