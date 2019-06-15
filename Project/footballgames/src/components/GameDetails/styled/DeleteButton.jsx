import styled from 'styled-components';

const DeleteButton = styled.button`
  right: 50px;
  top: 5px;
  border: 0;
  padding: 5px 10px;

  i {
    margin-left: 5px;
  }

  &:hover {
    color: #42f4b3;
    cursor: pointer;

    i {
      color: red;
      margin-left: 5px;
    }
  }
`;

export default DeleteButton;
