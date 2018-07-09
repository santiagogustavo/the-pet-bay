import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import AnimatedToken from 'components/AnimatedToken';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import {
  Centralized,
  Content,
  ListHeader,
  ListItem,
  ListItemLink,
  ListItemRemoveButton,
  Page,
} from 'components/styles';

class MyAgenda extends React.Component {
  componentWillMount = () => {
    this.redirectIfUnsigned();
    this.props.fetchPets(this.props.id, this.props.history);
    this.props.fetchAgenda(this.props.id, this.props.history);
  }
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  renderAgenda = () => {
    if (this.props.agenda.length === 0) {
      return (
        <AnimatedToken
          color="#8D6E63"
          icon="fas fa-calendar fa-2x"
          text="Sem eventos na agenda"
        />
      );
    }

    return (
      <div>
        <ListHeader>
          <div>
            <i className="fas fa-book" />
            <span>Serviço</span>
          </div>
          <div>
            <i className="fas fa-paw" />
            <span>Pet</span>
          </div>
          <div>
            <i className="fas fa-calendar-alt" />
            <span>Data</span>
          </div>
          <div>
            <i className="fas fa-clock" />
            <span>Horário</span>
          </div>
        </ListHeader>
        {
          this.props.agenda.map((event, index) => {
            const date = new Date(event.date);
            const time = new Date(event.time);
            const pet = this.props.pets.find(item => item.id === event.pet);
            return (
              <ListItem key={_.uniqueId(event.id)}>
                <ListItemLink to={`/services/${event.service}`}>
                  <i className="fas fa-star" />
                  {event.name}
                </ListItemLink>
                <ListItemLink to={`/my-pets/${pet.id}`}>
                  <i className="fas fa-star" />
                  {pet.name}
                </ListItemLink>
                <div>{`${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`}</div>
                <div>{`${`0${time.getUTCHours()}`.slice(-2)}:${`0${time.getUTCMinutes()}`.slice(-2)}`}</div>
                <ListItemRemoveButton
                  onClick={() => this.props.deleteBooking(event.id, index, this.props.history)}
                >
                  <i className="fas fa-times fa-lg" />
                </ListItemRemoveButton>
              </ListItem>
            );
          })
        }
      </div>
    );
  }

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle label="Minha Agenda" />
        {
          this.props.isFetchingAgenda || this.props.isFetchingPets ?
            <Centralized>
              <Loader />
            </Centralized>
          :
          this.renderAgenda()
        }
      </Content>
      <Footer />
    </Page>
  );
}

MyAgenda.propTypes = {
  fetchAgenda: PropTypes.func.isRequired,
  fetchPets: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  agenda: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    pet: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  })).isRequired,
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  isFetchingAgenda: PropTypes.bool.isRequired,
  isFetchingPets: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
};


export default MyAgenda;
