import styled, { keyframes } from 'styled-components';

import { randomColor } from 'components/Utils/colors';

const TokenAnim = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const generatedColor = randomColor();

export const Container = styled.div`
  color: ${props => (props.color ? props.color : generatedColor)};
  margin: auto;
  width: fit-content;
  height: auto;
  text-align: center;
  font-size: 18px;
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  color: #fff;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 50%;
  background: ${props => (props.color ? props.color : generatedColor)};
  animation: ${TokenAnim} 1s ease;
`;
