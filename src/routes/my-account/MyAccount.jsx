import React from 'react';
import PropTypes from 'prop-types';

import User from 'assets/imgs/user.png';

import AnimatedToken from 'components/AnimatedToken';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import {
  BigImg,
  ButtonContainer,
  Centralized,
  Content,
  Page,
  StyledH2,
} from 'components/styles';

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
    this.props.fetchAgenda(this.props.id, this.props.history);
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
        <StyledH2>Pets</StyledH2>
        <QuickDisplay>
          {
            this.props.pets.length > 0 ?
              <Data>
                {this.props.pets.length} pet{this.props.pets.length > 1 ? 's' : ''}
                &nbsp;cadastrado{this.props.pets.length > 1 ? 's' : ''}
              </Data>
            :
              <AnimatedToken
                color="#FFCA28"
                text="Nenhum pet cadastrado"
              />
          }
        </QuickDisplay>
        <DetailButton to="/my-pets">Ver Detalhes</DetailButton>
      </Display>
    );
  }

  renderAgenda = () => {
    if (this.props.isFetchingAgenda) {
      return (
        <Centralized>
          <Loader />
        </Centralized>
      );
    }
    return (
      <Display>
        <StyledH2>Agenda</StyledH2>
        <QuickDisplay>
          {
            this.props.agenda.length > 0 ?
              <Data>
                {this.props.agenda.length} evento{this.props.agenda.length > 1 ? 's' : ''}
                &nbsp;marcado{this.props.agenda.length > 1 ? 's' : ''}
              </Data>
              :
              <AnimatedToken
                color="#8D6E63"
                icon="fas fa-calendar fa-2x"
                text="Sem eventos na agenda"
              />
          }
        </QuickDisplay>
        <DetailButton to="/my-agenda">Ver Detalhes</DetailButton>
      </Display>
    );
  };

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle
          label="Minha Conta"
          text="Veja as informações básicas da sua conta e perfil"
        />
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
        {this.renderAgenda()}
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
                  this.props.agenda,
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
  fetchAgenda: PropTypes.func.isRequired,
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
  })).isRequired,
  agenda: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.id,
  })).isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingAgenda: PropTypes.bool.isRequired,
  isFetchingPets: PropTypes.bool.isRequired,
};


export default MyAccount;
