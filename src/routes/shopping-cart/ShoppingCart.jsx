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
  InfoText,
} from 'components/styles';

import {
  Total,
  BuyButton,
  ButtonContainer,
} from './styles';

class ShoppingCart extends React.Component {
  componentWillMount = () => this.redirectIfUnsigned();
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  renderCloseButton = () => (
    <ButtonContainer>
      {
        this.props.isFetching ?
          <Loader style={{ margin: 'auto' }} />
          :
          <BuyButton onClick={() => this.props.closeBill(this.props.user, this.props.items)}>
            <i className="fas fa-shopping-bag" />
            Fechar compra
          </BuyButton>
      }
    </ButtonContainer>
  );

  renderClosedBill = () => {
    if (this.props.closed) {
      return (
        <div>
          <AnimatedToken
            color="#8BC34A"
            icon="fas fa-check fa-2x"
            text="Compra efetuada com sucesso!"
          />
          <InfoText style={{ marginTop: 20 }}>
            Enviaremos um email com a sua fatura e mais informações sobre como receber o pedido
          </InfoText>
        </div>
      );
    }
    return null;
  };

  renderCart = () => {
    if (this.props.items.length === 0) {
      if (this.props.closed) return null;
      return (
        <AnimatedToken
          color="#42A5F5"
          icon="fas fa-shopping-bag fa-2x"
          text="Não há nenhum item no carrinho. Adicione produtos e volte para fechar a compra!"
        />
      );
    }

    if (this.props.isDeleting) {
      return (
        <Centralized>
          <Loader />
        </Centralized>
      );
    }

    return (
      <div>
        <ListHeader>
          <div style={{ flexGrow: 2 }}>
            <i className="fas fa-list" />
            <span>Item</span>
          </div>
          <div>
            <i className="fas fa-dollar-sign" />
            <span>Preço</span>
          </div>
          <div>
            <i className="fas fa-times" />
            <span>Quantidade</span>
          </div>
          <Total>
            <i className="fas fa-dollar-sign" />
            <span>Total</span>
          </Total>
        </ListHeader>
        {
          this.props.items.map((item, index) => (
            <ListItem key={_.uniqueId(item.id)}>
              <ListItemLink to={`/shop/${item.id}`} style={{ flexGrow: 2 }}>
                <i className="fas fa-star" />
                {item.name}
              </ListItemLink>
              <div><strong>R$</strong> {item.price.toFixed(2)}</div>
              <div>{item.count}</div>
              <Total><strong>R$</strong> {(item.price * item.count).toFixed(2)}</Total>
              <ListItemRemoveButton
                onClick={() =>
                  this.props.removeItem({
                    id: item.id,
                    quantity: item.quantity,
                    count: item.count,
                  }, index, this.props.history)
                }
              >
                <i className="fas fa-times fa-lg" />
              </ListItemRemoveButton>
            </ListItem>
          ))
        }
        {this.renderCloseButton()}
      </div>
    );
  };

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle
          label="Carrinho de Compras"
          text="Veja e revise seus produtos, clique no botão abaixo para comprar!"
        />
        {this.renderCart()}
        {this.renderClosedBill()}
      </Content>
      <Footer />
    </Page>
  );
}

ShoppingCart.propTypes = {
  closeBill: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  })).isRequired,
  closed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isDeleting: PropTypes.bool.isRequired,
  user: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
};

export default ShoppingCart;
