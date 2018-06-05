import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/imgs/logo.png';
import LandingBlocks from 'components/LandingBlocks';
import SeparatorTitle from 'components/SeparatorTitle';
import { LandingLogo, LandingLogoImg, StyledH4 } from 'components/styles';

const Navbar = ({ signed }) => (
  <div>
    {
      signed ?
        <SeparatorTitle label="Área do Usuário" />
      :
        <div>
          <LandingLogo>
            <LandingLogoImg src={Logo} />
            the pet bay
          </LandingLogo>
          <StyledH4>
            Bem-vindo à baía dos animais <br />
            Encontre os melhores produtos e serviços para seu marujinho! <br />
            Cadastre, compre ou agende um horário com nossos veterinários :)
          </StyledH4>
        </div>
    }
    <LandingBlocks />
  </div>
);

Navbar.propTypes = {
  signed: PropTypes.bool.isRequired,
};

export default Navbar;
