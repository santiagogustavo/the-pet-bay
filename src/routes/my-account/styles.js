import styled from 'styled-components';
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

export const Img = styled.img`
  display: block;
  height: 125px;
  width: 125px;
  border-radius: 50%;
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

export const QuickDisplay = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
  width: fit-content;
  margin: auto;

  & > h3 {
    color: #424242;
  }

  ${media.medium`
    & > h3 {
      margin-right: 30px;
    }
    flex-direction: row;
  `}
`;

export const Data = styled.div`
  display: flex;
  color: #616161;
  font-size: 18px;

  ${media.medium`
    & + &:before {
      content: ',';
      margin-right: 10px;
    }
  `}
`;
