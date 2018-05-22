import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  top: 0;
  width: 100%;
  height: 75px;
  background: #3498db;
  color: #fafafa;
  display: flex;
  align-content: flex-start;
  box-shadow: #00000055 0px 0px 5px;
`;

export const LogoText = styled(Link)`
  font-family: "Cream", sans-serif;
  font-size: 25px;
  color: white;
  text-decoration: none;
  margin: auto;
  margin-left: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
