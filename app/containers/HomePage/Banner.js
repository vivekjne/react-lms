import styled from 'styled-components';
import Banner from './banner.jpg';
export default styled.div`
  height: 500px;
  width: 100%;
  //   background: #444;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 150, 0.4),
      rgba(40, 0, 50, 100)
    ),
    url(${Banner}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  //   padding: 40px;
`;
