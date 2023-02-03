import { TouchableOpacityProps } from "react-native";
import { ButtonStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps;
};

export function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <Container styleType={type ? type : "primary"} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
