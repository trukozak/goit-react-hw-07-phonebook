import styled from 'styled-components';

export const AdvFormStyled = styled.div`
  padding: 20px 10px;
  margin: 10px;
  border: 2px solid;
  width: 400px;
  .inputName {
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
  }
  .btnAdd {
    display: block;
    margin-top: 30px;
    padding: 3px 5px;
    border-radius: 6px;
    cursor: pointer;
    background-color: transparent;
    &:hover {
      background-color: teal;
    }
  }
`;
