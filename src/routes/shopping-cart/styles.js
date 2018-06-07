import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

export const Item = styled.div`
  display: flex;
  border-radius: 10px;
  background: #E0E0E0;
  padding: 10px;
  align-items: center;
  width: 80%;
  margin: 20px auto;

  & > * {
    color: #212121;
    fill: #212121;
    flex: 1;
  }
`;

export const ItemLink = styled(RouteLink)`
  text-decoration: none;
`;
