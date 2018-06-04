import React from 'react';
import PropTypes from 'prop-types';

import { Container, SmallSeparatorLine } from './styles';

const SeparatorTitle = ({ label, text, ...props }) => (
  <Container {...props}>
    <h2>{label}</h2>
    <p style={{ color: '#424242' }}>{text}</p>
    <SmallSeparatorLine />
  </Container>
);

SeparatorTitle.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};

SeparatorTitle.defaultProps = {
  label: '',
  text: '',
};

export default SeparatorTitle;
