import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import User from 'assets/imgs/user.png';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import { BigImg, ButtonContainer, Centralized, Content, Page } from 'components/styles';

import {
  Profile,
  Primary,
  BasicInfo,
  Display,
  QuickDisplay,
  Data,
  DetailButton,
  RemoveButton,
} from './styles';

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
      <Display>
        <QuickDisplay>
          <h3>Pets Cadastrados</h3>
          {
            this.props.pets.length > 0 ?
              this.props.pets.map(pet => (
                <Data key={_.uniqueId(pet.name)}>
                  {pet.name}
                </Data>
              ))
            : <Data>Nenhum pet cadastrado!</Data>
          }
        </QuickDisplay>
        <DetailButton to="/my-pets">Ver Detalhes</DetailButton>
      </Display>
    );
  }

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle label="Minha Conta" />
        <Profile>
          <BigImg src={this.props.image || User} />
          <BasicInfo>
            <h2>{this.props.name}</h2>
            <div>{this.props.email}</div>
            <Primary to="/edit-account" style={{ marginTop: 20 }}>
              Editar Perfil
            </Primary>
          </BasicInfo>
        </Profile>
        {this.renderPets()}
        {
          this.props.isFetching ?
            <ButtonContainer>
              <Loader style={{ margin: 'auto' }} />
            </ButtonContainer>
            :
            <ButtonContainer>
              <RemoveButton
                onClick={() => this.props.deleteAccount(
                  this.props.id,
                  this.props.pets,
                  this.props.history,
                )}
              >
                <i className="fas fa-times" />
                Remover Conta
              </RemoveButton>
            </ButtonContainer>
        }
      </Content>
      <Footer />
    </Page>
  );
}

MyAccount.propTypes = {
  fetchPets: PropTypes.func.isRequired,
  // fetchAgenda: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  signed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.id,
    name: PropTypes.string,
  })).isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingPets: PropTypes.bool.isRequired,
};


export default MyAccount;
