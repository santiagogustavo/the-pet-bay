import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  font-size: 25px;
  margin: auto;
  line-height: 40px;
  padding: 0px 5px;
  transition: all 0.2s ease;
  
  &:focus { outline: none; }
  &:hover { transform: scale(1.1); }
`;

export const Dot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f44336;
  border-radius: 50%;
  font-family: 'Roboto', sans-serif;
  height: 15px;
  width: 15px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow: hidden;
`;
