import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from 'components/Utils/media';

export const Container = styled.header`
  top: 0;
  width: 100%;
  height: 75px;
  background: #3498db;
  color: #fafafa;
  display: flex;
  align-content: center;
  justify-content: center;
  box-shadow: #00000055 0px 0px 5px;
  
  ${media.medium`
    align-content: flex-start;
  `}
`;

export const LogoText = styled(Link)`
  font-family: "Cream", sans-serif;
  font-size: 25px;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  & > div {
    display: none;
    margin: 0;
  }

  ${media.medium`
    margin: auto;
    margin-left: 17.5%;
    & > div {
      display: block;
      margin-left: 20px;
    }
  `}
`;

export const UserArea = styled.div`
  display: none;

  ${media.medium`
    float: right;
    margin-right: 17.5%;
    display: flex;
    align-items: center;
  `}
`;

export const FaIcon = styled.i`
  position: relative;
  font-size: 25px;
  margin: auto;
  line-height: 40px;
  padding: 0px 5px;
`;
