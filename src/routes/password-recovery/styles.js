import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import media from 'components/Utils/media';
import { ButtonPrimary } from 'components/Buttons';

export const StyledH2 = styled.h2`
  text-align: center;
`;

export const InfoText = styled.div`
  text-align: center;
  color: #4e4e4e;
`;

export const Form = styled.div`
  width: auto;
  margin: auto;
  padding: 20px;

  ${media.medium`
    width: 256px;
  `}
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  flex-direction: column;

  & > * {
    margin: 10px;
  }

  ${media.medium`
    flex-direction: row;
  `}
`;

export const Primary = styled.div`
  ${ButtonPrimary}
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;

export const PrimaryLink = styled(RouterLink)`
  ${ButtonPrimary}
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;
