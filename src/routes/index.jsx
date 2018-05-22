import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

const Index = () => (
  <div>
    <RouteLink to="/hello">Say hi</RouteLink>
  </div>
);

export default Index;
