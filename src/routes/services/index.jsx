import React from 'react';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import { Content, Page } from 'components/styles';

const Hello = () => (
  <Page>
    <Navbar />
    <Content>
      <SeparatorTitle label="Serviços" />
    </Content>
    <Footer />
  </Page>
);

export default Hello;
