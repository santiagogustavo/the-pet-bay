import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import User from 'assets/imgs/user.png';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import { Centralized, Content, Page } from 'components/styles';

import { Profile, Img, BasicInfo, QuickDisplay, Data } from './styles';

class MyAccount extends React.Component {
  componentWillMount = () => {
    this.redirectIfUnsigned();
    this.props.fetchPets(this.props.id, this.props.history);
    // this.props.fetchAgenda(this.props.id, this.props.history);
  }
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  renderPets = () => {
    if (this.props.isFetchingPets) {
      return (
        <Centralized>
          <Loader />
        </Centralized>
      );
    }
    return (
      <QuickDisplay>
        <h3>Pets Cadastrados</h3>
        {
          this.props.pets.map(pet => (
            <Data key={_.uniqueId(pet.name)}>
              {pet.name}
            </Data>
          ))
        }
      </QuickDisplay>
    );
  }

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle label="Minha Conta" />
        <Profile>
          <Img src={User} />
          <BasicInfo>
            <h2>{this.props.name}</h2>
            <div>{this.props.email}</div>
          </BasicInfo>
        </Profile>
        {this.renderPets()}
      </Content>
      <Footer />
    </Page>
  );
}

MyAccount.propTypes = {
  fetchPets: PropTypes.func.isRequired,
  // fetchAgenda: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  signed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.id,
    name: PropTypes.string,
  })).isRequired,
  isFetchingPets: PropTypes.bool.isRequired,
};


export default MyAccount;
