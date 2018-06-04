import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import Navbar from 'components/Navbar';
import { Content } from 'components/styles';

import { StyledH2, Form, ButtonContainer, Primary, Danger } from './styles';

const SignIn = ({
  username,
  password,
  errors,
  history,
  changeUsername,
  changePassword,
  submitForm,
}) => (
  <div>
    <Navbar />
    <Content>
      <StyledH2>Entrar</StyledH2>
      <Form>
        <TextField
          fullWidth
          id="sign-in-username"
          floatingLabelText="Usuário"
          value={username}
          onChange={changeUsername}
          errorText={errors.username}
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
      </Form>
      <ButtonContainer>
        <Danger to="/password-recovery">ESQUECI MINHA SENHA</Danger>
        <Primary onClick={() => submitForm(username, password, history)}>
          ENTRAR
        </Primary>
      </ButtonContainer>
    </Content>
  </div>
);

SignIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default SignIn;
