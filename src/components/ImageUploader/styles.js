import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  margin: auto;
`;

export const Icon = styled.i`
  position: absolute;
  top: 50%;
  right: 50%;
  margin-top: 10px;
  margin-right: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  color: #ffffff;
  background: #3498db;
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
  margin: 15px;
  border-radius: 50%;
  object-fit: cover;
`;
