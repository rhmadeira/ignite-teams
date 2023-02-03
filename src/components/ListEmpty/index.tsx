import { Container, Mensage } from "./styles";

type ListEmptyProps = {
  mensage: string;
};

export function ListEmpty({ mensage }: ListEmptyProps) {
  return (
    <Container>
      <Mensage>{mensage}</Mensage>
    </Container>
  );
}
