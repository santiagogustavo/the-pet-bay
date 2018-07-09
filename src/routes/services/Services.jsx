import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Placeholder from 'assets/imgs/placeholder.jpg';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Promotion from 'components/Promotion';
import SeparatorTitle from 'components/SeparatorTitle';
import { randomColor } from 'components/Utils/colors';
import { Centralized, Content, Page, PromotionsContainer } from 'components/styles';

class Services extends React.Component {
  componentWillMount = () =>
    this.props.fetch(this.props.history);

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <SeparatorTitle label="Serviços" />
        {
          this.props.isFetching ?
            <Centralized>
              <Loader />
            </Centralized>
            :
            <div>
              <PromotionsContainer>
                {this.props.services.map(item => (
                  <div key={_.uniqueId(item.id)}>
                    <Promotion
                      label={item.name}
                      text={item.short}
                      color={randomColor()}
                      to={`/services/${item.id}`}
                      image={item.image || Placeholder}
                    />
                  </div>
                ))}
              </PromotionsContainer>
            </div>
        }
      </Content>
      <Footer />
    </Page>
  );
}

Services.propTypes = {
  fetch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    short: PropTypes.string,
  })).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Services;
