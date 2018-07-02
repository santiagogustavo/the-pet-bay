import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import AnimatedToken from 'components/AnimatedToken';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Promotion from 'components/Promotion';
import SeparatorTitle from 'components/SeparatorTitle';
import { randomColor } from 'components/Utils/colors';
import { Centralized, Content, Page, PromotionsContainer } from 'components/styles';

import { ButtonContainer, AddButton } from './styles';

class MyPets extends React.Component {
  componentWillMount = () => {
    this.redirectIfUnsigned();
    this.props.fetch(this.props.user, this.props.history);
  }

  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  renderList = () => {
    if (this.props.pets.length === 0) {
      return (
        <AnimatedToken
          color="#FFCA28"
          text="Você ainda não possui pets.
          Clique no botão abaixo para cadastrar um!"
        />
      );
    }
    return (
      <PromotionsContainer>
        {
          this.props.pets.map(pet => (
            <div key={_.uniqueId(pet.id)}>
              <Promotion
                label={pet.name}
                icon={pet.image ? null : 'fas fa-paw fa-3x'}
                image={pet.image || null}
                priceTag={pet.species}
                color={randomColor()}
                to={`/my-pets/${pet.id}`}
              />
            </div>
          ))
        }
      </PromotionsContainer>
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
            <div>
              <SeparatorTitle label="Meus Pets" />
              {this.renderList()}
              <ButtonContainer>
                <AddButton to="/my-pets/new">
                  <i className="fas fa-plus" />
                  Adicionar Pet
                </AddButton>
              </ButtonContainer>
            </div>
        }
      </Content>
      <Footer />
    </Page>
  );
}

MyPets.propTypes = {
  fetch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
  })).isRequired,
  user: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};


export default MyPets;
