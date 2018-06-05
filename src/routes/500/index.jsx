import React from 'react';

import ScaredDog from 'assets/imgs/scared_dog.jpg';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Content, Page, LandingLogo, LandingLogoImg, StyledH4 } from 'components/styles';

const Route500 = () => (
  <Page>
    <Navbar />
    <Content>
      <LandingLogo>
        <LandingLogoImg src={ScaredDog} />
        500
      </LandingLogo>
      <StyledH4>
        Ops, algo deu errado x(
      </StyledH4>
    </Content>
    <Footer />
  </Page>
);

export default Route500;
