import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './styles';

const Dropdown = ({ children, open, title }) => (
  <Container open={open}>
    <Wrapper>
      {
        title ?
          <h4>{title}</h4>
        : null
      }
      {children}
    </Wrapper>
  </Container>
);

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  open: PropTypes.bool,
  title: PropTypes.string,
};

Dropdown.defaultProps = {
  open: false,
  title: null,
};

export default Dropdown;
