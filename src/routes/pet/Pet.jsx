import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Paw from 'assets/imgs/paw.png';

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
  ListHeader,
  ListItem,
  ListItemRemoveButton,
  Page,
  StyledH2,
} from 'components/styles';

import { BasicInfo, Profile, Primary, RemoveButton } from './styles';

class Pet extends React.Component {
  componentWillMount = () => {
    this.redirectIfUnsigned();
    this.props.clear();
    this.props.fetch(this.props.user, this.props.match.params.id, this.props.history);
  }
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  renderAgenda = () => {
    if (this.props.agenda.length !== 0) {
      return (
        <div>
          <ListHeader>
            <div>
              <i className="fas fa-book" />
              <span>Serviço</span>
            </div>
            <div>
              <i className="fas fa-calendar-alt" />
              <span>Data</span>
            </div>
          </ListHeader>
          {
            this.props.agenda.map((event, index) => (
              <ListItem key={_.uniqueId(event.id)}>
                <div>{event.type}</div>
                <div>{event.date}</div>
                <ListItemRemoveButton
                  onClick={() => this.props.deleteEvent(event.id, index, this.props.history)}
                >
                  <i className="fas fa-times fa-lg" />
                </ListItemRemoveButton>
              </ListItem>
            ))
          }
        </div>
      );
    }
    return (
      <AnimatedToken
        color="#8D6E63"
        icon="fas fa-calendar fa-2x"
        text="Sem eventos na agenda"
      />
    );
  }

  renderData = () => (
    <Profile>
      <BigImg src={this.props.image || Paw} />
      <BasicInfo>
        <h2>{this.props.name}</h2>
        <div>{this.props.species}</div>
        <Primary to={`/edit-pet/${this.props.match.params.id}`} style={{ marginTop: 20 }}>
          Editar Pet
        </Primary>
      </BasicInfo>
    </Profile>
  );

  render = () => (
    <Page>
      <Navbar />
      <Content>
        {
          this.props.isFetching ?
            <Centralized>
              <Loader />
            </Centralized>
            :
            <div>
              <SeparatorTitle
                label="Meu Pet"
                text="Veja as informações cadastradas e o histórico do seu pet"
              />
              <StyledH2>Dados</StyledH2>
              {this.renderData()}
              <StyledH2>Agenda</StyledH2>
              {this.renderAgenda()}
              <ButtonContainer>
                <RemoveButton
                  onClick={() => this.props.deletePet(
                    this.props.match.params.id,
                    this.props.agenda,
                    this.props.history,
                  )}
                >
                  <i className="fas fa-times" />
                  Remover Pet
                </RemoveButton>
              </ButtonContainer>
            </div>
        }
      </Content>
      <Footer />
    </Page>
  );
}

Pet.propTypes = {
  clear: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  deletePet: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  agenda: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
  user: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Pet;
