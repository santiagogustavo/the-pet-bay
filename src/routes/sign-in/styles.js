import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import media from 'components/Utils/media';
import { ButtonPrimary, ButtonDanger } from 'components/Buttons';

export const StyledH2 = styled.h2`
  text-align: center;
`;

export const Form = styled.div`
  width: 256px;
  margin: auto;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
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

export const Danger = styled(RouterLink)`
  ${ButtonDanger}
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;
