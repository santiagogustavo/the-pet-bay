import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

import Footer from 'components/Footer';
import ImageUploader from 'components/ImageUploader';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import { Content, Form, Page, StyledH2 } from 'components/styles';

import { ButtonContainer, Primary } from './styles';

class NewPet extends React.Component {
  componentWillMount = () => this.redirectIfUnsigned();

  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <StyledH2>Novo Pet</StyledH2>
        <Form>
          <ImageUploader
            label="Foto do pet"
            src={this.props.image}
            onDrop={this.props.changeImage}
          />
          <TextField
            fullWidth
            id="new-pet-name"
            floatingLabelText="Nome"
            value={this.props.name}
            onChange={this.props.changeName}
            errorText={this.props.errors.name}
          />
          <TextField
            fullWidth
            id="new-pet-species"
            floatingLabelText="Espécie"
            value={this.props.species}
            onChange={this.props.changeSpecies}
            errorText={this.props.errors.species}
          />
        </Form>
        {
          this.props.isFetching ?
            <ButtonContainer>
              <Loader style={{ margin: 'auto' }} />
            </ButtonContainer>
            :
            <ButtonContainer>
              <Primary
                tabIndex="0"
                onClick={() => this.props.submitForm(
                  this.props.user,
                  this.props.name,
                  this.props.species,
                  this.props.image,
                  this.props.history,
                )}
              >
                CRIAR
              </Primary>
            </ButtonContainer>
        }
      </Content>
      <Footer />
    </Page>
  );
}

NewPet.propTypes = {
  changeName: PropTypes.func.isRequired,
  changeSpecies: PropTypes.func.isRequired,
  changeImage: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
};


export default NewPet;
