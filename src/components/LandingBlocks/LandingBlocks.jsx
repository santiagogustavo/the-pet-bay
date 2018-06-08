import React from 'react';
import PropTypes from 'prop-types';

import { Container, Block } from './styles';

const LandingBlocks = ({ signed }) => (
  <Container>
    <Block to="/services">
      <i className="fas fa-book fa-2x" />
      Serviços
    </Block>
    <Block to="/shop">
      <i className="fas fa-shopping-bag fa-2x" />
      Loja
    </Block>
    {
      signed ?
        <Container>
          <Block to="/my-pets">
            <i className="fas fa-paw fa-2x" />
            Pets
          </Block>
          <Block to="/my-agenda">
            <i className="far fa-calendar fa-2x" />
            Agenda
          </Block>
          <Block to="/my-account">
            <i className="fas fa-user fa-2x" />
            Conta
          </Block>
        </Container>
      :
        null
    }
  </Container>
);

LandingBlocks.propTypes = {
  signed: PropTypes.bool.isRequired,
};

export default LandingBlocks;
