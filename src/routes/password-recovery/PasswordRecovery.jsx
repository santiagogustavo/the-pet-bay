import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import {
  ButtonContainer, Content, Form, InfoText, Page, Primary, StyledH2,
} from 'components/styles';

import { PrimaryLink } from './styles';

const PasswordRecovery = ({
  email,
  errors,
  isFetching,
  success,
  history,
  changeEmail,
  submitForm,
}) => {
  const renderButtons = () => (isFetching ?
    <ButtonContainer>
      <Loader style={{ margin: 'auto' }} />
    </ButtonContainer>
    :
    <ButtonContainer>
      <Primary tabIndex="0" onClick={() => submitForm(email, history)}>
        ENVIAR
      </Primary>
    </ButtonContainer>
  );
  return (
    <Page>
      <Navbar />
      <Content>
        <StyledH2>Recuperar sua senha</StyledH2>
        {
          success ?
            <div>
              <InfoText>
                Ok :D <br />
                Você deverá receber em breve um email com instruções para recuperar sua conta! <br /><br />
                Enquanto isso, clique no botão abaixo para voltar à página inicial
              </InfoText>
              <ButtonContainer>
                <PrimaryLink tabIndex="0" to="/">
                  VOLTAR
                </PrimaryLink>
              </ButtonContainer>
            </div>
          :
            <div>
              <InfoText>
                Esqueceu sua senha? Não tem problema :) <br />
                Digite seu email abaixo e te enviaremos um email para recuperá-la
              </InfoText>
              <Form>
                <TextField
                  fullWidth
                  id="password-recovery-email"
                  floatingLabelText="Email"
                  value={email}
                  onChange={changeEmail}
                  errorText={errors.email}
                />
              </Form>
              {renderButtons()}
            </div>
        }
      </Content>
      <Footer />
    </Page>
  );
};

PasswordRecovery.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  changeEmail: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default PasswordRecovery;
