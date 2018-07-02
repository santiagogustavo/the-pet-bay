import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { ButtonPrimary, ButtonDanger } from 'components/Buttons';
import media from 'components/Utils/media';

export default styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  color: #001122;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: fit-content;

  ${media.medium`
    flex-direction: row;
  `}
`;

export const Primary = styled(RouterLink)`
  ${ButtonPrimary}
  width: 100%;

  ${media.medium`
    margin-top: auto;
    width: fit-content;
  `}
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 35px;

  & > h2 {
    margin: 0;
  }
  & > div {
    margin-top: 15px;
    color: #757575;
  }

  ${media.medium`
    align-items: flex-start;
    margin: auto;
    margin-left: 35px;
  `}
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px auto;
`;

export const QuickDisplay = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  margin: auto;

  & > h3 {
    color: #424242;
  }

  ${media.medium`
    & > h3 {
      margin: 15px;
      margin-right: 30px;
    }
    flex-direction: row;
  `}
`;

export const Data = styled.div`
  display: flex;
  color: #616161;
  font-size: 18px;
  margin: auto;

  & + & { margin-top: 15px; }

  ${media.medium`
    & + & { margin-top: auto; }
    & + &:before {
      content: ',';
      margin-right: 10px;
    }
  `}
`;

export const DetailButton = styled(RouterLink)`
  ${ButtonPrimary}
  width: 70%;
  margin-top: 25px;

  ${media.small`
    width: 40%;
  `}
  ${media.medium`
    margin-top: auto;
    width: fit-content;
  `}
`;

export const RemoveButton = styled.div`
  ${ButtonDanger}
  & > i { margin-right: 10px; }
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;
