import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

import Navbar from 'components/Navbar';
import { Content } from 'components/styles';

const Index = () => (
  <div>
    <Navbar />
    <Content>
      <RouteLink to="/hello">Say hi</RouteLink>
    </Content>
  </div>
);

export default Index;
