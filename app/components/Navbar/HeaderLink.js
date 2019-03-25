import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  height: 40;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #777;

  &:active {
    color: red;
  }

  &:hover {
    color: red;
  }
`;
