import styled from 'styled-components';

const GameDetailsContainer = styled.section`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  font-size: 1.3rem;
  text-transform: uppercase;
  padding-bottom: 30px;

  div {
    padding: 10px 0;
  }
  input[type='checkbox'] {
    transform: scale(1.4);

    &:checked {
      color: green;
    }
  }
`;

export default GameDetailsContainer;
