import styled, { css } from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import { ButtonPrimary, ButtonSuccess } from 'components/Buttons';
import media from 'components/Utils/media';
import { randomColor } from 'components/Utils/colors';

export default styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  color: #001122;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    margin: 10px;
  }
  
  ${media.medium`
    flex-direction: row;
  `}
`;

export const Description = styled.div`
  color: #9E9E9E;
  text-align: center;

  ${media.medium`
    text-align: left;
  `}
`;

export const Img = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  object-fit: cover;

  ${media.medium`
    height: 200px;
    width: 200px;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
`;

export const PriceTag = styled.div`
  margin-top: 25px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;

  ${media.medium`
    margin-top: 20px;
    text-align: left;
  `}
`;

export const Separator = styled.div`
  width: 100px;
  height: 3px;
  background: ${randomColor()};
  margin: 25px;

  ${media.medium`
    width: 3px;
    height: 100px;
  `}
`;

export const Title = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;

  ${media.medium`
    margin-bottom: 5px;
    text-align: left;
  `}
`;

export const Subtitle = styled.div`
  font-size: 18px;
  margin-bottom: 35px;
  text-align: center;
  color: #616161;

  ${media.medium`
    margin-bottom: 30px;
    text-align: left;
  `}
`;

export const BuyButton = styled.div`
  ${ButtonSuccess}
  width: auto;

  & > i {
    margin-right: 10px;
  }

  ${props => (props.inactive ? css`
    background: #9E9E9E;
    &:hover {
      background: #9E9E9E;
    }
  ` : null)}
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  & > * {
    margin: 10px;
  }

  ${media.medium`
    flex-direction: row;
    align-items: baseline;
    width: 300px;
  `}
`;

export const Unavailable = styled.div`
  color: #ef5350;
  margin: 30px 20px 10px 10px;
`;

export const SignInButton = styled(RouteLink)`
  ${ButtonPrimary}
  width: auto;
  margin-top: 30px;

  & > i {
    margin-right: 10px;
  }

  ${media.medium`
    width: fit-content;
  `}
`;
