import { CardContainer, DeleteButtonContainer } from "./styles";

interface CardProps {
  num: number;
  index: number;
  handleDelete: (id: number) => void;
}

const Card = (props: CardProps) => {
  const { num, index, handleDelete } = props;
  return (
    <div style={{ position: "relative" }}>
      <DeleteButtonContainer onClick={() => handleDelete(index)}>
        X
      </DeleteButtonContainer>
      <CardContainer>
        <div>{num}</div>
      </CardContainer>
    </div>
  );
};

export default Card;
