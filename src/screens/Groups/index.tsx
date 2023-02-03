import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { Container } from "./styles";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera da Gmill",
    "Galera la de casa",
    "Galera da faculdade ",
  ]);

  return (
    <Container>
      <Header showBackButton={false} />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard groupName={item} />}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : { flex: 0 }}
        ListEmptyComponent={
          <ListEmpty mensage="Não há nenhum grupo cadastrado." />
        }
      />
      <Button title="Adicionar" />
    </Container>
  );
}
