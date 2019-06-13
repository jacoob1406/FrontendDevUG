import styled from 'styled-components';

const Button = styled.button`
  background: #42f4b3; // todo change
  padding: 5px 10px;
  text-align: center;
  color: #000000;
  width: ${props => props.width};
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    color: #000000;
  }
`;

export default Button;
