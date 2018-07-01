import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import User from 'assets/imgs/user.png';
import { InfoText } from 'components/styles';

import { Container, Icon, Img } from './styles';

const ImageUploader = ({ src, label, ...props }) => (
  <Dropzone
    multiple={false}
    accept="image/*"
    style={{}}
    {...props}
  >
    {({ isDragActive }) => (
      <Container isDragActive={isDragActive}>
        <Img src={src || User} />
        <Icon className="fas fa-upload" />
        <InfoText>{label}</InfoText>
      </Container>
    )}
  </Dropzone>
);

ImageUploader.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
};

ImageUploader.defaultProps = {
  src: User,
  label: '',
};

export default ImageUploader;
