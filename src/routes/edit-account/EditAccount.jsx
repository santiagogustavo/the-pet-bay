import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import {
  ButtonContainer, Content, Form, InfoText, Page, Primary, StyledH2,
} from 'components/styles';

class EditAccount extends React.Component {
  componentWillMount = () => {
    this.redirectIfUnsigned();
    this.props.populateData({
      name: this.props.userName,
      email: this.props.userEmail,
    });
  }
  componentDidUpdate = () => this.redirectIfUnsigned();

  redirectIfUnsigned = () => {
    if (!this.props.signed) this.props.history.push('/');
  }

  render = () => {
    const {
      id,
      name,
      email,
      passwordNew,
      errors,
      isFetching,
      history,
      changeName,
      changeEmail,
      changePasswordNew,
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
            <TextField
              fullWidth
              id="edit-account-name"
              floatingLabelText="Nome"
              value={name}
              onChange={changeName}
              errorText={errors.name}
            />
            <TextField
              fullWidth
              id="edit-account-email"
              floatingLabelText="Email"
              value={email}
              onChange={changeEmail}
              errorText={errors.email}
            />
            <TextField
              fullWidth
              id="edit-account-password-confirmation"
              floatingLabelText="Senha Nova"
              type="password"
              value={passwordNew}
              onChange={changePasswordNew}
              errorText={errors.passwordNew}
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
                  onClick={() => submitForm(id, name, email, passwordNew, history)}
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
}

EditAccount.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  signed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  passwordNew: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  populateData: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePasswordNew: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default EditAccount;
