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

const SignUp = ({
  name,
  email,
  image,
  password,
  passwordConfirmation,
  errors,
  isFetching,
  history,
  changeName,
  changeEmail,
  changeImage,
  changePassword,
  changePasswordConfirmation,
  submitForm,
}) => (
  <Page>
    <Navbar />
    <Content>
      <StyledH2>Criar Conta</StyledH2>
      <InfoText>
        Precisamos de alguns dados iniciais para criar sua conta <br />
        Digite-os abaixo, você poderá editar e acrescentar mais informações depois!
      </InfoText>
      <Form>
        <ImageUploader
          label="Imagem de perfil"
          src={image}
          onDrop={changeImage}
        />
        <TextField
          fullWidth
          id="sign-in-name"
          floatingLabelText="Nome"
          value={name}
          onChange={changeName}
          errorText={errors.name}
        />
        <TextField
          fullWidth
          id="sign-in-email"
          floatingLabelText="Email"
          value={email}
          onChange={changeEmail}
          errorText={errors.email}
        />
        <TextField
          fullWidth
          id="sign-in-password"
          floatingLabelText="Senha"
          type="password"
          value={password}
          onChange={changePassword}
          errorText={errors.password}
        />
        <TextField
          fullWidth
          id="sign-in-password-confirmation"
          floatingLabelText="Confirmar Senha"
          type="password"
          value={passwordConfirmation}
          onChange={changePasswordConfirmation}
          errorText={errors.passwordConfirmation}
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
              onClick={() => submitForm(name, email, image, password, passwordConfirmation, history)}
            >
              CRIAR
            </Primary>
          </ButtonContainer>
      }
    </Content>
    <Footer />
  </Page>
);

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  changeName: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changeImage: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changePasswordConfirmation: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default SignUp;
