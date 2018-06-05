import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Block = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #3498db;
  color: #fafafa;
  transition: all 0.2s ease;
  text-decoration: none;
  user-select: none;
  margin: 5px;

  & > i {
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
