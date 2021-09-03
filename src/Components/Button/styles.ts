import styled, { css } from "styled-components";

interface StyledButtonProps {
  titleColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;
  width: 120px;
  text-align: center;
  outline: none;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
  ${(props) => css`
    background-color: ${props.color};
    color: ${props.titleColor && props.titleColor};
    border: ${props.color ? `0.3px solid ${props.color}` : "none"};

    &:hover {
      filter: brightness(0.85);
      cursor: pointer;
    }
  `}
`;
