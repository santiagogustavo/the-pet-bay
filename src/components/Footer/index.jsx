import React from 'react';

import { Container, FaLink } from './styles';

const Navbar = () => (
  <Container>
    <FaLink href="https://github.com/santiagogustavo/the-pet-bay">
      <i className="fab fa-github-alt fa-2x" />
    </FaLink>
  </Container>
);

export default Navbar;
