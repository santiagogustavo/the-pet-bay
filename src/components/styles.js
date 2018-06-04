import styled from 'styled-components';

import { ButtonPrimary } from 'components/Buttons';
import media from 'components/Utils/media';

export const NavbarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease;
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

export const Content = styled.main`
  padding: 15px;
  padding-left: 10%;
  padding-right: 10%;

  ${media.medium`
    padding-left: 15%;
    padding-right: 15%;
  `}
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

export const StyledH2 = styled.h2`
  text-align: center;
`;
