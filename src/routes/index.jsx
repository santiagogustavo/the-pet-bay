import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link as RouteLink } from 'react-router-dom';

import PetHotelBanner from 'assets/imgs/pet_hotel_banner.jpg';
import Placeholder from 'assets/imgs/placeholder.jpg';
import VetDog from 'assets/imgs/vet_dog.jpg';
import WashDogs from 'assets/imgs/wash_dogs.jpg';

import { fetchPromotions } from 'actions/landingPage';

import Footer from 'components/Footer';
import LandingArea from 'components/LandingArea';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Promotion from 'components/Promotion';
import SeparatorTitle from 'components/SeparatorTitle';
import { randomColor } from 'components/Utils/colors';
import {
  Centralized,
  Content,
  Page,
  PromotionsBanner,
  PromotionsContainer,
} from 'components/styles';

class Index extends React.Component {
  componentWillMount = () =>
    this.props.fetchPromotions(this.props.history);

  renderPromotions = () => {
    if (this.props.promotions.isFetching) {
      return (
        <Centralized>
          <Loader />
        </Centralized>
      );
    }
    return (
      <div>
        <SeparatorTitle
          label="Produtos"
          text={`Preparamos estas promoções especiais! (Vence em ${this.props.promotions.dueDate})`}
        />
        <PromotionsContainer>
          {
            this.props.promotions.products.map(product => (
              <div key={_.uniqueId(product.id)}>
                {
                  product.isFetching ?
                    <Centralized>
                      <Loader />
                    </Centralized>
                  :
                    <Promotion
                      label={product.name || 'product'}
                      text={`De R$${product.oldPrice ? product.oldPrice.toFixed(2) : 0} por apenas`}
                      priceTag={`R$${product.price ? product.price.toFixed(2) : 0}`}
                      color={randomColor()}
                      image={product.image || Placeholder}
                      to={`/shop/${product.id}`}
                    />
                }
              </div>
            ))
          }
        </PromotionsContainer>
      </div>
    );
  }

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <LandingArea />
        <SeparatorTitle
          label="Serviços"
          text="Marque um check-up!"
        />
        <PromotionsContainer>
          <div>
            <Promotion
              label="Banho e Tosa"
              text="Para cães e gatos"
              color={randomColor()}
              image={WashDogs}
            />
          </div>
          <div>
            <Promotion
              label="Veterinário"
              text="Exames e cirurgias"
              color={randomColor()}
              image={VetDog}
            />
          </div>
        </PromotionsContainer>
        {this.renderPromotions()}
        <SeparatorTitle
          label="Pet Hotel Las Vegas"
          text="Clique abaixo para saber mais!"
        />
        <RouteLink to="/pet-hotel">
          <PromotionsBanner src={PetHotelBanner} />
        </RouteLink>
      </Content>
      <Footer />
    </Page>
  );
}

Index.propTypes = {
  fetchPromotions: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  promotions: PropTypes.shape({
    dueDate: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.number,
      isFetching: PropTypes.bool,
    })),
    isFetching: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  promotions: state.landingPage.promotions,
});

const mapDispatchToProps = {
  fetchPromotions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
