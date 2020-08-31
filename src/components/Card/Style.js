import styled from 'styled-components';

export const Style = styled.div`
  background-color: rgb(99, 128, 175);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 10px 35px;
  margin: 12px;
  width: 200px;
  height: 120px;
`;

export const Button = styled.div`
  button{
    background-color: rgb(187, 168, 93);
    border: 1px solid black;
  }
  button:hover {
    background-color: rgb(177, 0, 0);
    cursor:pointer;
    
  }
`;
