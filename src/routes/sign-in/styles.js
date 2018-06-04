import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import media from 'components/Utils/media';
import { ButtonDanger } from 'components/Buttons';

export const Danger = styled(RouterLink)`
  ${ButtonDanger}
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;
