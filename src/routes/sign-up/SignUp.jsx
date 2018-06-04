import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import { Content } from 'components/styles';

import { StyledH2, Form, ButtonContainer, Primary } from './styles';

const SignUp = ({
  name,
  email,
  password,
  passwordConfirmation,
  errors,
  isFetching,
  history,
  changeName,
  changeEmail,
  changePassword,
  changePasswordConfirmation,
  submitForm,
}) => (
  <div>
    <Navbar />
    <Content>
      <StyledH2>Criar Conta</StyledH2>
      <Form>
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
            <Primary onClick={() => submitForm(name, email, password, passwordConfirmation, history)}>
              CRIAR
            </Primary>
          </ButtonContainer>
      }
    </Content>
  </div>
);

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  changeName: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changePasswordConfirmation: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default SignUp;
