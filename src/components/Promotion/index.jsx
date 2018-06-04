import React from 'react';
import PropTypes from 'prop-types';

import { Container, Img, Separator, Text, PriceTag } from './styles';

const Promotion = ({
  label, text, image, color, priceTag, ...props
}) => (
  <Container {...props}>
    <Img src={image} />
    <Separator color={color} />
    <Text>
      <h4>{label}</h4>
      <p style={{ color: '#424242' }}>{text}</p>
      <PriceTag>{priceTag}</PriceTag>
    </Text>
  </Container>
);

Promotion.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string,
  priceTag: PropTypes.string,
};

Promotion.defaultProps = {
  color: '#727272',
  priceTag: '',
};

export default Promotion;
