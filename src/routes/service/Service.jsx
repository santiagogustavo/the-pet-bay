import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, TimePicker } from 'material-ui';

import Placeholder from 'assets/imgs/placeholder.jpg';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import { Centralized, Content, Page } from 'components/styles';

import {
  Container,
  Description,
  Img,
  Info,
  PickersContainer,
  Separator,
  SignInButton,
  Subtitle,
  Title,
} from './styles';

class Service extends React.Component {
  componentWillMount = () =>
    this.props.fetch(this.props.match.params.id, this.props.history);

  renderBookContainer = () => {
    if (!this.props.signed) {
      return (
        <SignInButton tabIndex="0" to="/sign-in">
          <i className="fas fa-sign-in-alt" />
          Entre para agendar
        </SignInButton>
      );
    }
    return (
      <PickersContainer>
        <DatePicker
          fullWidth
          id="service-booking-date"
          onChange={(event, date) => console.log(date.getUTCDate(), date.getUTCMonth() + 1, date.getUTCFullYear())}
          DateTimeFormat={Intl.DateTimeFormat}
          hintText="Data"
          cancelLabel="Cancelar"
          locale="pt-BR"
        />
        <TimePicker
          fullWidth
          id="service-booking-time"
          onChange={(event, time) => console.log(time.getHours(), time.getMinutes())}
          format="24hr"
          hintText="Horário"
          cancelLabel="Cancelar"
          locale="pt-BR"
        />
      </PickersContainer>
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
  fetch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  signed: PropTypes.bool.isRequired,
};

export default Service;
