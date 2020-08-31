import styled from 'styled-components';

export const Card = styled.div`
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

export const Button = styled.button`
  background-color: ${(props) => props.variant === 'red' ? 'red' : 'blue' };
  // background-color: rgb(187, 168, 93);
  border: 1px solid black;
  
  &:hover {
    background-color: rgb(177, 0, 0);
    cursor:pointer;
  }
`;
