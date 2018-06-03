import styled, { css } from 'styled-components';

export const Container = styled.div`
  opacity: 0;
  pointer-events: none;
  margin-left: -10px;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  transition: all 0.2s ease;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props => props.open && css`
    opacity: 1;
    pointer-events: auto;
    margin-left: 0px;
  `}
`;

export const Wrapper = styled.nav`
  position: relative;
  background-color: white;
  box-shadow: #00000055 0px 0px 5px;
  height: 100vh;
  overflow: hidden;
  color: #212121;

  & h4 {
    text-align: center;
    margin: 0px;
    padding: 10px;
    color: #757575;
    font-size: 16px;
    font-weight: bold;
    border-bottom: #fafafa solid 2px;
  }
`;

export const Dim = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  transition: all 0.2s ease;

  ${props => props.visible && css`
    opacity: 0.35;
  `}
`;
