import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

import Placeholder from 'assets/imgs/placeholder.jpg';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import { Centralized, Content, Page } from 'components/styles';

import {
  BuyButton,
  BuyContainer,
  Container,
  Description,
  Img,
  Info,
  PriceTag,
  Separator,
  SignInButton,
  Title,
  Unavailable,
} from './styles';

class Product extends React.Component {
  componentWillMount = () =>
    this.props.fetch(this.props.match.params.id, this.props.history);

  renderBuyContainer = () => {
    if (!this.props.signed) {
      return (
        <SignInButton tabIndex="0" to="/sign-in">
          <i className="fas fa-sign-in-alt" />
          Entre para comprar
        </SignInButton>
      );
    }
    if (this.props.quantity === 0) {
      return (
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <Unavailable>Produto indisponível :(</Unavailable>
          <BuyButton inactive>
            <i className="fas fa-plus" />
            Comprar
          </BuyButton>
        </div>
      );
    }
    return (
      <BuyContainer>
        <div>
          <TextField
            floatingLabelText="Quantidade"
            fullWidth
            min={0}
            max={this.props.quantity}
            onChange={this.props.changeCount}
            value={this.props.count}
            type="number"
          />
        </div>
        <BuyButton
          onClick={() =>
            this.props.addItem({
              id: this.props.id,
              count: this.props.count,
              quantity: this.props.quantity,
              name: this.props.name,
              price: this.props.price,
            }, this.props.history)
          }
        >
          <i className="fas fa-plus" />
          Comprar
        </BuyButton>
      </BuyContainer>
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
                <Description>
                  <span> Descrição </span>
                  {this.props.description}
                </Description>
                <Description>
                  <span> Quantidade disponível </span>
                  {this.props.quantity}
                </Description>
                <PriceTag>
                  R$ {this.props.price.toFixed(2)}
                </PriceTag>
                {this.renderBuyContainer()}
              </Info>
            </Container>
        }
      </Content>
      <Footer />
    </Page>
  )
}

Product.propTypes = {
  addItem: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  changeCount: PropTypes.func.isRequired,
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
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Product;
