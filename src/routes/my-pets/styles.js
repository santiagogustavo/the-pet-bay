import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonPrimary } from 'components/Buttons';

import media from 'components/Utils/media';

const TokenAnim = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

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

export const EmptyContainer = styled.div`
  color: #FFCA28;
  margin: auto;
  width: fit-content;
  height: auto;
  text-align: center;
  font-size: 18px;
`;

export const EmptyIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  color: #fff;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 50%;
  background: #FFCA28;
  animation: ${TokenAnim} 1s ease;
`;
