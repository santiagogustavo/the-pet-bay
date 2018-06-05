import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from 'components/Utils/media';

export const Img = styled.img`
  display: block;
  height: 115px;
  width: 115px;
  border-radius: 50%;
`;

export const Separator = styled.div`
  background-color: ${props => props.color}; 
  height: 3px;
  width: 50px;
  margin: 20px auto;

  ${media.medium`
    background-color: ${props => props.color};
    height: 50px;
    width: 3px;
    margin: auto 20px;
  `}
`;

export const Text = styled.div`
  text-align: center;

  & > h4 {
    margin-top: 0;
    margin-bottom: 10px;
  }
  & > p {
    margin-bottom: 0;
  }

  ${media.medium`
    text-align: left;
  `}
`;

export const PriceTag = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: #212121;

  &:hover {
    transform: scale(1.05);
  }

  &:focus { outline: none; }
  &::-moz-focus-inner { border: 0; }

  ${media.medium`
    flex-direction: row;
  `}
`;
