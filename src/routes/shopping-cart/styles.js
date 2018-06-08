import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import media from 'components/Utils/media';

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 20px auto;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #212121;
    font-weight: bold;
    flex: 1;
    padding: 5px;
    & > span { display: none; }
    & > i { margin-right: 0px; }
  }

  & > div:first-child { flex-grow: 2; }
  & > div:nth-last-child(2) { margin-right: 30px }
  & > div:last-child { display: none; margin-right: 30px }

  ${media.large`
    & > div {
      justify-content: flex-start;
      & > span { display: block; }
      & > i { margin-right: 5px; }
    }
    & > div:nth-last-child(2) { margin-right: 0px }
    & > div:last-child { display: flex; }
  `}
`;

export const Item = styled.div`
  display: flex;
  border-radius: 40px;
  background: #E0E0E0;
  padding: 10px 20px;
  align-items: center;
  width: 80%;
  margin: 20px auto;

  & > * {
    text-align: center;
    color: #212121;
    fill: #212121;
    flex: 1;
  }

  & > div { padding: 5px; }

  ${media.large`
    & > *{
      text-align: left;
    }
  `}
`;

export const ItemLink = styled(RouteLink)`
  flex-grow: 2;
  text-decoration: none;
  color: #0288D1;
  & > i { margin-right: 10px; } 
  &:hover { color: #03A9F4; }
`;

export const Total = styled.div`
  display: none;
  ${media.large`
    display: block;
  `}
`;

export const RemoveButton = styled.button`
  flex: 0;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  transition: all 0.2s ease;
  background: #EEEEEE;
  cursor: pointer;

  &:hover {
    background: #F5F5F5;
    transform: translateY(-3px);
    box-shadow: #00000055 0px 3px 0px;
  }
`;
