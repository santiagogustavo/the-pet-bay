import styled, { keyframes } from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import { ButtonPrimary } from 'components/Buttons';
import media from 'components/Utils/media';
import { randomColor } from 'components/Utils/colors';

const SlideIn = keyframes`
  0% { margin-top: 15px; opacity: 0 }
  100% { margin-top: 0px; opacity: 1 }
`;

export const NavbarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease;
`;

export const LandingLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  text-align: center;
  margin: 20px;
  font-family: 'Cream', sans-serif;
  font-size: 36px;
  font-weight: bold;
  user-select: none;
`;

export const LandingLogoImg = styled.img`
  width: 150px;
  height: 150px;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  object-fit: cover;

  ${media.medium`
    width: 150px;
    height: 150px;
  `}
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  flex-direction: column;

  & > * {
    margin: 10px;
  }

  ${media.medium`
    flex-direction: row;
  `}
`;

export const Page = styled.div`
  display: block;
  position: relative;
  min-height: 100vh;
`;

export const Centralized = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  padding: 15px;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 100px;

  ${media.medium`
    padding-left: 15%;
    padding-right: 15%;
  `}

  animation: ${SlideIn} 500ms ease;
`;

export const Form = styled.div`
  width: auto;
  margin: auto;
  padding: 20px;

  ${media.medium`
    width: 256px;
  `}
`;

export const InfoText = styled.div`
  text-align: center;
  color: #4e4e4e;
`;

export const Primary = styled.div`
  ${ButtonPrimary}
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;

export const PromotionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    margin: 20px;
    flex: 1;
  }

  ${media.medium`
    flex-direction: row;
  `}
`;

export const PromotionsBanner = styled.img`
  display: block;
  height: 115px;
  width: 115px;
  object-fit: cover;
  object-position: right;
  border-radius: 50%;
  margin: auto;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${media.medium`
    border-radius: 0%;
    height: 150px;
    width: auto;
  `}
`;

export const StyledH2 = styled.h2`
  text-align: center;
`;

export const StyledH4 = styled.h4`
  text-align: center;
  font-size: 20px;
  color: #424242;
`;

export const ListHeader = styled.div`
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

  & > div:nth-last-child(2) { margin-right: 30px }
  & > div:last-child { margin-right: 30px }

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

export const ListItem = styled.div`
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

export const ListItemLink = styled(RouteLink)`
  flex-grow: 2;
  text-decoration: none;
  color: #0288D1;
  & > i { margin-right: 10px; } 
  &:hover { color: #03A9F4; }
`;

export const ListItemRemoveButton = styled.button`
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

export const BigImg = styled.img`
  display: block;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const BigSeparator = styled.div`
  width: 100px;
  height: 3px;
  background: ${randomColor()};
  margin: 25px;

  ${media.medium`
    width: 3px;
    height: 100px;
  `}
`;

