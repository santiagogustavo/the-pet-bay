import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { DatePicker, TimePicker, SelectField, MenuItem } from 'material-ui';

import Placeholder from 'assets/imgs/placeholder.jpg';

import AnimatedToken from 'components/AnimatedToken';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import { Centralized, Content, Page } from 'components/styles';

import {
  Container,
  Description,
  Img,
  Info,
  InfoPet,
  PickersContainer,
  SelectContainer,
  Separator,
  BookButton,
  BookContainer,
  SignInButton,
  Subtitle,
  Title,
} from './styles';

class Service extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
      time: null,
      pet: null,
    };

    this.props.history.listen(() => {
      this.props.clear();
    });
  }

  componentWillMount = () => {
    this.props.fetch(this.props.match.params.id, this.props.history);
    if (this.props.signed) this.props.fetchPets(this.props.userId, this.props.history);
  }

  handleDate = (event, date) => this.setState({ date });
  handleTime = (event, time) => this.setState({ time });
  handlePet = (event, index, value) => this.setState({ pet: value });

  renderPetsSelect = () => {
    if (this.props.isFetchingPets) {
      return (
        <Centralized>
          <Loader />
        </Centralized>
      );
    }

    if (this.props.pets.length > 0) {
      return (
        <SelectContainer>
          <SelectField
            value={this.state.pet}
            onChange={this.handlePet}
            floatingLabelText="Pet"
          >
            {
              this.props.pets.map(pet =>
                <MenuItem key={_.uniqueId(pet.name)} value={pet.id} primaryText={pet.name} />)
              }
          </SelectField>
        </SelectContainer>
      );
    }

    return (
      <SelectContainer>
        <InfoPet>
          Você não possui nenhum pet ainda!
          <br />
          Clique no botão abaixo para cadastrar um pet antes de agendar
        </InfoPet>
      </SelectContainer>
    );
  }

  renderBookContainer = () => {
    if (!this.props.signed) {
      return (
        <SignInButton tabIndex="0" to="/sign-in">
          <i className="fas fa-sign-in-alt" />
          Entre para agendar
        </SignInButton>
      );
    }
    if (this.props.isPosting) {
      return (
        <Centralized>
          <Loader />
        </Centralized>
      );
    }
    if (this.props.success) {
      return (
        <div style={{ marginTop: 30 }}>
          <AnimatedToken
            color="#8D6E63"
            icon="fas fa-calendar fa-2x"
            text="Agendado com sucesso!"
          />
        </div>
      );
    }
    return (
      <div>
        {this.renderPetsSelect()}
        <PickersContainer>
          <SignInButton to="/my-pets/new">
            <i className="fas fa-plus" />
            Adicionar Pet
          </SignInButton>
        </PickersContainer>
        <PickersContainer>
          <DatePicker
            fullWidth
            id="service-booking-date"
            DateTimeFormat={Intl.DateTimeFormat}
            hintText="Data"
            cancelLabel="Cancelar"
            locale="pt-BR"
            onChange={this.handleDate}
            value={this.state.date}
          />
          <TimePicker
            fullWidth
            id="service-booking-time"
            format="24hr"
            hintText="Horário"
            cancelLabel="Cancelar"
            locale="pt-BR"
            onChange={this.handleTime}
            value={this.state.time}
          />
        </PickersContainer>
        <BookContainer>
          <BookButton
            disabled={!(this.state.pet && this.state.date && this.state.time)}
            onClick={() => this.props.postBooking({
              user: this.props.userId,
              pet: this.state.pet,
              service: this.props.id,
              name: this.props.name,
              date: this.state.date,
              time: this.state.time,
            }, this.props.history)}
          >
            <i className="fas fa-plus" />
            Agendar
          </BookButton>
        </BookContainer>
      </div>
    );
  }

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
            <Container>
              <Img src={this.props.image || Placeholder} />
              <Separator />
              <Info>
                <Title>
                  {this.props.name}
                </Title>
                <Subtitle>
                  {this.props.short}
                </Subtitle>
                <Description>
                  {this.props.long}
                </Description>
                {this.renderBookContainer()}
              </Info>
            </Container>
        }
      </Content>
      <Footer />
    </Page>
  )
}

Service.propTypes = {
  clear: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  fetchPets: PropTypes.func.isRequired,
  postBooking: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    listen: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.id,
    name: PropTypes.name,
  })).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingPets: PropTypes.bool.isRequired,
  isPosting: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  signed: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Service;
