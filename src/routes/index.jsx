import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

import Navbar from 'components/Navbar';

const Index = () => (
  <div>
    <Navbar />
    <RouteLink to="/hello">Say hi</RouteLink>
  </div>
);

export default Index;
