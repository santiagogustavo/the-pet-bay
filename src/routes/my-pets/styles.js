import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonPrimary } from 'components/Buttons';

import media from 'components/Utils/media';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const AddButton = styled(RouterLink)`
  ${ButtonPrimary}
  & > i { margin-right: 10px; }
  margin: auto;
  width: 100%;

  ${media.medium`
    width: fit-content;
  `}
`;
