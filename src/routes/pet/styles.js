import styled from 'styled-components';
import { ButtonDanger } from 'components/Buttons';

import media from 'components/Utils/media';

export const Data = styled.div`
  display: flex;
  align-items: center;
  color: #212121;
  & + & { margin-top: 20px; }
  & > * { flex: 1; }
  & > span {
    font-weight: bold;
    margin-right: 20px;
    text-align: right;
    & > i {
      margin-left: 10px;
    }
  }
  & > div {
    font-size: 26px;
    text-align: left;
  }
`;

export const RemoveButton = styled.div`
  ${ButtonDanger}
  & > i { margin-right: 10px; }
  width: auto;

  ${media.medium`
    width: fit-content;
  `}
`;
