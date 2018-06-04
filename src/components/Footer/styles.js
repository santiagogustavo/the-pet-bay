import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #3498db;
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #00000055 0px 0px 5px;
`;

export const FaLink = styled.a`
  color: #fafafa;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
