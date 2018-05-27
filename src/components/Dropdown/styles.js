import styled, { css } from 'styled-components';

export const Container = styled.div`
  opacity: 0;
  pointer-events: none;
  margin-top: -10px;
  position: absolute;
  z-index: 1000;
  top: 59.5px;
  right: 0;
  transition: all 0.2s ease;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props => props.open && css`
    opacity: 1;
    pointer-events: auto;
    margin-top: 0px;
  `}
`;

export const Wrapper = styled.nav`
  position: relative;
  background-color: white;
  box-shadow: #00000055 0px 0px 5px;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
