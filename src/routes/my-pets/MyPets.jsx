import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import VetDog from 'assets/imgs/vet_dog.jpg';
import WashDogs from 'assets/imgs/wash_dogs.jpg';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Promotion from 'components/Promotion';
import SeparatorTitle from 'components/SeparatorTitle';
import {
  PromotionsContainer, ButtonContainer, Form, Primary,
} from 'components/styles';
import { Container } from './styles';

import { Content, Page } from '../../components/styles';

const petSize = [
  {
    value: 'SMALL',
    label: 'Pequeno',
  },
  {
    value: 'MEDIUM',
    label: 'Médio',
  },
  {
    value: 'LARGE',
    label: 'Grande',
  },
];

const petType = [
  {
    value: 'CAT',
    label: 'Gato',
  },
  {
    value: 'DOG',
    label: 'Cachorro',
  },
];

class MyPets extends React.Component {
  state = {
    name: '',
    size: '',
    type: '',
    race: '',
    notes: '',
  };

  componentWillMount = () => {
    if (this.props.signed) {
      return true;
    }

    // window.location = '/';
    return true;
  };

  handleChange = name => event => (
    this.setState({
      [name]: event.target.value,
    })
  )

  render = () => (
    <Page>
      <Navbar />
      <Content>
        <PromotionsContainer>
          <div>
            <Promotion
              label="Jonas"
              text="O gato molhado que mais parece um cachorro"
              color="#3498db"
              image={WashDogs}
            />
          </div>
          <div>
            <Promotion
              label="Doggito"
              text="Golden Retriever"
              color="#9E9D24"
              image={VetDog}
            />
          </div>
        </PromotionsContainer>
        <SeparatorTitle
          label="Cadastro"
          text="Cadastre um novo pet."
        />
        <Form style={{ width: '35%' }}>
          <Container>

            <Container>

              <TextField
                id="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <br />
              <TextField
                id="name"
                label="Raça"
                value={this.state.race}
                onChange={this.handleChange('race')}
                margin="normal"
              />
              <br />
              <TextField
                id="select-pet-type"
                select
                value={this.state.type}
                onChange={this.handleChange('type')}
                helperText="Gato/Cachorro"
                margin="normal"
                style={{ width: '45%' }}
              >
                {petType.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                id="select-pet-size"
                select
                label=""
                value={this.state.size}
                onChange={this.handleChange('size')}
                helperText="Tamanho do seu pet"
                margin="normal"
                style={{ width: '45%' }}
              >
                {petSize.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
            </Container>
            <TextField
              id="notes"
              label="Observações"
              multiline
              fullWidth
              rows="4"
              value={this.state.notes}
              onChange={this.handleChange('notes')}
              margin="normal"
            />
          </Container>
        </Form>
        <ButtonContainer>
          <Primary>
            Registrar
          </Primary>
        </ButtonContainer>
      </Content>
      <Footer />
    </Page>
  )
}

MyPets.propTypes = {
  signed: PropTypes.bool.isRequired,
};

export default MyPets;
