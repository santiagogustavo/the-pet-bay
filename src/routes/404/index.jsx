import React from 'react';

import PizzaCat from 'assets/imgs/pizza_cat.jpg';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Content, Page, LandingLogo, LandingLogoImg, StyledH4 } from 'components/styles';

const Route404 = () => (
  <Page>
    <Navbar />
    <Content>
      <LandingLogo>
        <LandingLogoImg src={PizzaCat} />
        404
      </LandingLogo>
      <StyledH4>
        Página não encontrada :(
      </StyledH4>
    </Content>
    <Footer />
  </Page>
);

export default Route404;
