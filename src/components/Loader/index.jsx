import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

const Loader = ({ color, ...props }) => (
  <Container color={color} {...props}>
    <div /><div /><div /><div />
  </Container>
);

Loader.propTypes = {
  color: PropTypes.string,
};

Loader.defaultProps = {
  color: '#4e4e4e',
};

export default Loader;
