import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonPrimary, ButtonDanger } from 'components/Buttons';

import media from 'components/Utils/media';

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

export const RemoveButton = styled.div`
  ${ButtonDanger}
  & > i { margin-right: 10px; }
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;
