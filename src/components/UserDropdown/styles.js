import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  user-select: none;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  max-width: 300px;
`;

export const NavLink = styled(RouteLink)`
  position: relative;
  padding: 8px 25px;
  cursor: pointer;
  
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: #fafafa;
  }

  &, & > * {
    color: #757575;
  }

  & > * {
    display: inline-block;
    vertical-align: top;
  }

  & > i {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`;
