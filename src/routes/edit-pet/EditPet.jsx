import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

import Footer from 'components/Footer';
import ImageUploader from 'components/ImageUploader';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import {
  ButtonContainer, Content, Form, InfoText, Page, Primary, StyledH2,
} from 'components/styles';

class EditPet extends React.Component {
  componentWillMount = () => {
    this.redirectIfUnsigned();
    this.props.fetch(this.props.user, this.props.match.params.id, this.props.history);
  }
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  render = () => {
    const {
      id,
      name,
      species,
      image,
      errors,
      isFetching,
      history,
      changeName,
      changeSpecies,
      changeImage,
      submitForm,
    } = this.props;

    return (
      <Page>
        <Navbar />
        <Content>
          <StyledH2>Editar Conta</StyledH2>
          <InfoText>
            Modifique seus dados abaixo <br />
            Para alterar sua senha, digite sua senha nova
          </InfoText>
          <Form>
            <ImageUploader
              label="Foto do pet"
              src={image}
              onDrop={changeImage}
            />
            <TextField
              fullWidth
              id="edit-pet-name"
              floatingLabelText="Nome"
              value={name}
              onChange={changeName}
              errorText={errors.name}
            />
            <TextField
              fullWidth
              id="edit-pet-species"
              floatingLabelText="Espécie"
              value={species}
              onChange={changeSpecies}
              errorText={errors.species}
            />
          </Form>
          {
            isFetching ?
              <ButtonContainer>
                <Loader style={{ margin: 'auto' }} />
              </ButtonContainer>
              :
              <ButtonContainer>
                <Primary
                  tabIndex="0"
                  onClick={() => submitForm(id, name, species, image, history)}
                >
                  SALVAR
                </Primary>
              </ButtonContainer>
          }
        </Content>
        <Footer />
      </Page>
    );
  }
}

EditPet.propTypes = {
  user: PropTypes.number.isRequired,
  signed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fetch: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changeSpecies: PropTypes.func.isRequired,
  changeImage: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default EditPet;
