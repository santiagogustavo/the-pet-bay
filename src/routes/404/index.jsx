import React from 'react';

import GrumpyCat from 'assets/imgs/grumpy_cat.jpg';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Content, Page, LandingLogo, LandingLogoImg, StyledH4 } from 'components/styles';

const Hello = () => (
  <Page>
    <Navbar />
    <Content>
      <LandingLogo>
        <LandingLogoImg src={GrumpyCat} />
        404
      </LandingLogo>
      <StyledH4>
        Página não encontrada :(
      </StyledH4>
    </Content>
    <Footer />
  </Page>
);

export default Hello;
