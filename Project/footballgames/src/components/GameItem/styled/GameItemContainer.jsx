import styled from 'styled-components';

const GameItemContainer = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  margin: 0 auto 15px;
  padding: 10px 0;
  text-align: center;
  color: #000000;
  width: 80%;
  position: relative;
  z-index: 1;

  &:hover {
    opacity: 0.7;
  }

  span {
    font-weight: bold;
  }
`;

export default GameItemContainer;
