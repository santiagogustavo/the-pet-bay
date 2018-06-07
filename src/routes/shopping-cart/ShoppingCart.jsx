import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SeparatorTitle from 'components/SeparatorTitle';
import { Content, Page } from 'components/styles';

import { Item, ItemLink } from './styles';

class ShoppingCart extends React.Component {
  componentWillMount = () => this.redirectIfUnsigned();
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
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
              {
                this.props.items.map((item, index) => (
                  <Item key={_.uniqueId(item.id)}>
                    <ItemLink to={`/shop/${item.id}`}>
                      {item.name}
                    </ItemLink>
                    <div>R$ {item.price}</div>
                    <div>Quantidade: {item.count}</div>
                    <div>Total: R$ {item.price * item.count}</div>
                    <button onClick={() => this.props.removeItem(index)}>
                      <i className="fas fa-times" />
                    </button>
                  </Item>
                ))
              }
            </div>
          : null
        }
      </Content>
      <Footer />
    </Page>
  );
}

ShoppingCart.propTypes = {
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
  signed: PropTypes.bool.isRequired,
};

export default ShoppingCart;
