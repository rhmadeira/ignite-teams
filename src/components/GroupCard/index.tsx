import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
  groupName: string;
};

export function GroupCard({ groupName, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{groupName}</Title>
    </Container>
  );
}
