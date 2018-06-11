import React from 'react';
import PropTypes from 'prop-types';

import { Brand, Container, Img, Separator, Text, PriceTag } from './styles';

const Promotion = ({
  label, text, image, icon, color, priceTag, to, ...props
}) => (
  <Container to={to} {...props}>
    {
      icon ?
        <Brand color={color}>
          <i className={icon} />
        </Brand>
      :
        <Img src={image} color={color} />
    }
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
  text: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  priceTag: PropTypes.string,
  to: PropTypes.string,
};

Promotion.defaultProps = {
  text: '',
  icon: '',
  image: '',
  color: '#727272',
  priceTag: '',
  to: '/',
};

export default Promotion;
