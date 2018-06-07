import { css } from 'styled-components';

const Button = css`
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  text-decoration: none;
  color: #fafafa;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  width: fit-content;
  border-radius: 3px;
  transition: all 0.1s ease;
  user-select: none;
  cursor: pointer;
  &:hover, &:focus {
    transform: translateY(-3px);
    box-shadow: #00000055 0px 3px 0px;
    outline: none;
  }
  &:active {
    transform: none;    
  }
`;

export const ButtonPrimary = css`
  ${Button}
  background-color: #3498db;
  &:hover {
    background-color: #64B5F6;
  }
`;

export const ButtonSuccess = css`
  ${Button}
  background-color: #43A047;
  &:hover {
    background-color: #66BB6A;
  }
`;

export const ButtonDanger = css`
  ${Button}
  background-color: #c0392b;
  &:hover {
    background-color: #f44336;
  }
`;
