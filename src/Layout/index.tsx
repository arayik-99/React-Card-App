import { useContext } from "react";
import { Card } from "../Components";
import { AppContext } from "../Context";
import { ContextProps } from "../Context/types";
import { Container, LeftContainer, RightContainer } from "./styles";

const Layout = () => {
  const { cards, deleteCard } = useContext<ContextProps>(AppContext);

  return (
    <Container>
      <LeftContainer>
        {cards.map((card, index: number) => (
          <Card
            index={index}
            handleDelete={() => deleteCard(index)}
            key={index}
            num={card.num}
          />
        ))}
      </LeftContainer>
      <RightContainer>
        <div>Instructions</div>
      </RightContainer>
    </Container>
  );
};

export default Layout;
