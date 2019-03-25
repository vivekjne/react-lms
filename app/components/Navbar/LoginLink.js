import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  height: 40;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #444;
  border: 1px solid #aeaeae;
  padding: 10px 15px;

  &:active {
    color: #222;
    border: 1px solid #777;
  }

  &:hover {
    color: #000;
    border: 1px solid #777;
  }
`;
