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
  margin-left: -20px;

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

export const UserContentArea = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  flex-direction: row;
`;

export const SidebarArea = styled.div`
  float: left;
  margin-left: 7.5%;
  display: flex;
  align-items: center;
  flex-basis: calc(50% - 7.5%);

  ${media.medium`
    display: none;
  `}
`;

export const FaIcon = styled.i`
  position: relative;
  font-size: 25px;
  margin: auto;
  line-height: 40px;
  padding: 0px 5px;
`;

export const Name = styled.div`
  margin-right: 20px;
`;
