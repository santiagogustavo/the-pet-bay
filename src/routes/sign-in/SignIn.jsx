import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import {
  ButtonContainer, Content, Form, Page, Primary, StyledH2,
} from 'components/styles';

import { Danger } from './styles';

const SignIn = ({
  email,
  password,
  errors,
  isFetching,
  history,
  changeEmail,
  changePassword,
  submitForm,
}) => (
  <Page>
    <Navbar />
    <Content>
      <StyledH2>Entrar</StyledH2>
      <Form>
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
      </Form>
      {
        isFetching ?
          <ButtonContainer>
            <Loader style={{ margin: 'auto' }} />
          </ButtonContainer>
        :
          <ButtonContainer>
            <Danger tabIndex="0" to="/password-recovery">ESQUECI MINHA SENHA</Danger>
            <Primary tabIndex="0" onClick={() => submitForm(email, password, history)}>
              ENTRAR
            </Primary>
          </ButtonContainer>
      }
    </Content>
    <Footer />
  </Page>
);

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default SignIn;
