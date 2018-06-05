import React from 'react';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import StyledH1 from './styles';
import { Content, Page } from '../../components/styles';

const Shop = () => (
  <Page>
    <Navbar />
    <Content>
      <StyledH1>
        Shop world!
      </StyledH1>
    </Content>
    <Footer />
  </Page>
);

export default Shop;
