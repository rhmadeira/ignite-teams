import { Container, Logo } from "./styles";
import logoImg from "@assets/logo.png";
import { CaretLeft } from "phosphor-react-native";

export function Header() {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
    </Container>
  );
}
