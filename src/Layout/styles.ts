import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 88vh;
`;

export const LeftContainer = styled.div`
  height: 100%;
  overflow: auto;
  display: grid;
  justify-content: center;
  padding: 20px;
  flex: 3 1 0%;
  border-right: 0.3px solid grey;
  border-bottom: 0.3px solid grey;
  grid-template-columns: repeat(auto-fill, 265px);
  grid-row-gap: 25px;
  grid-column-gap: 25px;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
