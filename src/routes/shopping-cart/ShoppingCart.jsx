import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import { Content, Page, InfoText } from 'components/styles';

import {
  BuyContainer,
  BuyIcon,
  Header,
  Item,
  ItemLink,
  RemoveButton,
  Total,
  BuyButton,
  ButtonContainer,
  EmptyIcon,
  EmptyContainer,
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
          <BuyContainer>
            <BuyIcon className="fas fa-check fa-2x" />
            Compra efetuada com sucesso!
          </BuyContainer>
          <InfoText style={{ marginTop: 20 }}>
            Enviaremos um email com a sua fatura e mais informações sobre como receber o pedido
          </InfoText>
        </div>
      );
    }
    return null;
  };

  renderEmpty = () => {
    if (this.props.closed) return null;
    return (
      <div>
        <EmptyContainer>
          <EmptyIcon className="fas fa-shopping-bag fa-2x" />
          Não há nenhum item no carrinho.
          Adicione produtos e volte para fechar a compra!
        </EmptyContainer>
      </div>
    );
  }

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle
          label="Carrinho de Compras"
          text="Veja e revise seus produtos, clique no botão abaixo para comprar!"
        />
        {
          this.props.items.length > 0 ?
            <div>
              <Header>
                <div>
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
                <div>
                  <i className="fas fa-dollar-sign" />
                  <span>Total</span>
                </div>
              </Header>
              {
                this.props.items.map((item, index) => (
                  <Item key={_.uniqueId(item.id)}>
                    <ItemLink to={`/shop/${item.id}`}>
                      <i className="fas fa-star" />
                      {item.name}
                    </ItemLink>
                    <div><strong>R$</strong> {item.price.toFixed(2)}</div>
                    <div>{item.count}</div>
                    <Total><strong>R$</strong> {(item.price * item.count).toFixed(2)}</Total>
                    <RemoveButton
                      onClick={() =>
                        this.props.removeItem({
                          id: item.id,
                          quantity: item.quantity,
                          count: item.count,
                        }, index)
                      }
                    >
                      <i className="fas fa-times fa-lg" />
                    </RemoveButton>
                  </Item>
                ))
              }
              {this.renderCloseButton()}
            </div>
          : this.renderEmpty()
        }
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
  user: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
};

export default ShoppingCart;
