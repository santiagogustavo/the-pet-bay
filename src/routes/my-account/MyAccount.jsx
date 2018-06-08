import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import { Content, Page } from 'components/styles';

class MyAccount extends React.Component {
  componentWillMount = () => this.redirectIfUnsigned();
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle label="Minha Conta" />
      </Content>
      <Footer />
    </Page>
  );
}

MyAccount.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  signed: PropTypes.bool.isRequired,
};


export default MyAccount;
