import { useContext } from "react";
import { AppContext } from "../../Context";
import { ContextProps } from "../../Context/types";
import Button from "../Button";
import { ButtonContainer, StyledHeader } from "./styles";

const Header = () => {
  const { addCard, sortCards } = useContext<ContextProps>(AppContext);
  return (
    <StyledHeader>
      <ButtonContainer>
        <Button
          title="Add Card"
          titleColor="white"
          color="#00d94f"
          onClick={addCard}
        />
        <Button title="Sort Cards" onClick={sortCards} />
      </ButtonContainer>
    </StyledHeader>
  );
};

export default Header;
