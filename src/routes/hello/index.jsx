import React from 'react';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import StyledH1 from './styles';
import { Content, Page } from '../../components/styles';

const Hello = () => (
  <Page>
    <Navbar />
    <Content>
      <StyledH1>
        Hello world!
      </StyledH1>
    </Content>
    <Footer />
  </Page>
);

export default Hello;
