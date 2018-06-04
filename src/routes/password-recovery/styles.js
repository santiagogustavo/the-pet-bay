import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import media from 'components/Utils/media';
import { ButtonPrimary } from 'components/Buttons';

export const PrimaryLink = styled(RouterLink)`
  ${ButtonPrimary}
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;
