import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d8d8d8;
  background-color: #d8d8d8;
  border-radius: 15px;
  width: 250px;
  height: 250px;
  box-shadow: 8px 12px 15px grey;
`;

export const DeleteButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px -30px;
  
  &:hover {
    cursor: pointer;
  }
`;
