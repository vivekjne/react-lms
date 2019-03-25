import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  height: 40;
  width: 100px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  margin-left: 15px;
  color: #efefef;
  //   border: 1px solid #aeaeae;
  padding: 10px 15px;
  background: rgb(200, 20, 20);

  &:active {
    color: #fff;
    // border: 1px solid #777;
  }

  &:hover {
    color: #fff;
    // border: 1px solid #777;
  }
`;
