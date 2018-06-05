import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import { Content, Page } from '../../components/styles';

class MyPets extends React.Component {
  componentWillMount = () => {
    if (this.props.signed) {
      return true;
    }

    window.location = '/';
    return false;
  }
  render = () => (
    <Page>
      <Navbar />
      <Content>
        My pets! { this.props.signed }
      </Content>
      <Footer />
    </Page>
  )
}

MyPets.propTypes = {
  signed: PropTypes.bool.isRequired,
};

export default MyPets;
