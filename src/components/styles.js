import styled from 'styled-components';
import media from 'components/Utils/media';

export const NavbarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease;
`;

export const Content = styled.main`
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;

  ${media.medium`
    padding-left: 15%;
    padding-right: 15%;
  `}
`;
