import { StyledButton } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  titleColor?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { title, onClick, color, titleColor } = props;
  return (
    <StyledButton titleColor={titleColor} color={color} onClick={onClick}>
      {title}
    </StyledButton>
  )
}

export default Button;
