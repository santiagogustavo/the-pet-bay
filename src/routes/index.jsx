import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';

import Placeholder from 'assets/imgs/placeholder.jpg';

import { fetchPromotions, fetchServices } from 'actions/landingPage';

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
  PromotionsContainer,
} from 'components/styles';

class Index extends React.Component {
  componentWillMount = () => {
    this.props.fetchServices(this.props.history);
    this.props.fetchPromotions(this.props.history);
  }

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

  renderServices = () => {
    if (this.props.services.isFetching) {
      return (
        <Centralized>
          <Loader />
        </Centralized>
      );
    }
    return (
      <div>
        <SeparatorTitle
          label="Serviços"
          text="Marque um check-up!"
        />
        <PromotionsContainer>
          {
            this.props.services.services.map(service => (
              <div key={_.uniqueId(service.id)}>
                {
                  service.isFetching ?
                    <Centralized>
                      <Loader />
                    </Centralized>
                    :
                    <Promotion
                      label={service.name || 'service'}
                      text={service.short}
                      color={randomColor()}
                      image={service.image || Placeholder}
                      to={`/services/${service.id}`}
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
        {this.renderServices()}
        {this.renderPromotions()}
      </Content>
      <Footer />
    </Page>
  );
}

Index.propTypes = {
  fetchPromotions: PropTypes.func.isRequired,
  fetchServices: PropTypes.func.isRequired,
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
  services: PropTypes.shape({
    services: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        short: PropTypes.string,
        isFetching: PropTypes.bool,
      }),
    ])),
    isFetching: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  promotions: state.landingPage.promotions,
  services: state.landingPage.services,
});

const mapDispatchToProps = {
  fetchPromotions, fetchServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
