import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon } from './styles';

const AnimatedToken = ({
  color, icon, text, ...props
}) => (
  <Container color={color} {...props}>
    <Icon color={color} className={icon} />
    {text}
  </Container>
);

AnimatedToken.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

AnimatedToken.defaultProps = {
  color: '',
  icon: 'fas fa-paw fa-2x',
  text: '',
};

export default AnimatedToken;
