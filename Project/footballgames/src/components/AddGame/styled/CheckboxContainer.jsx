import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  padding-bottom: 10px;

  input[type='checkbox'] {
    transform: scale(1.4);
    margin: 2px 0 0 7px;

    &:checked {
      color: green;
    }
  }
`;

export default CheckboxContainer;
