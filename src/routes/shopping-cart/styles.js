import styled from 'styled-components';
import { ButtonSuccess } from 'components/Buttons';

import media from 'components/Utils/media';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const BuyButton = styled.div`
  ${ButtonSuccess}
  & > i { margin-right: 10px; }
  margin: auto;
  width: 100%;

  ${media.medium`
    width: fit-content;
  `}
`;

export const Total = styled.div`
  display: none !important;
  ${media.large`
    display: flex !important;
  `}
`;
