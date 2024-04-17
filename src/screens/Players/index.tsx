import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import { FlatList, Alert, TextInput, Keyboard, Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { ButtonIcon } from '@/components/ButtonIcon';
import { Filter } from '@/components/Filter';
import Header from '@/components/Header';
import HighLight from '@/components/HighLight';
import { Input } from '@/components/Input';
import ListEmpty from '@/components/ListEmpty';
import Loading from '@/components/Loading';
import { PlayerCard } from '@/components/PlayerCard';
import { PlayerStorageDTO } from '@/data/dto/PlayerStorageDTO';

type RouteParams = {
  group: string;
};

export function Players() {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const navigation = useNavigation();
  const route = useRoute();

  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    console.log('handleAddPlayer');
    // if (newPlayerName.trim().length === 0) {
    //   return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
    // }

    // const newPlayer = {
    //   name: newPlayerName,
    //   team,
    // };

    // try {
    //   await playerAddByGroup(newPlayer, group);

    //   newPlayerNameInputRef.current?.blur();

    //   setNewPlayerName('');
    //   fetchPlayersByTeam();
    // } catch (error) {
    //   if (error instanceof AppError) {
    //     Alert.alert('Nova pessoa', error.message);
    //   } else {
    //     console.log(error);
    //     Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
    //   }
    // }
  }

  async function fetchPlayersByTeam() {
    console.log('fetchPlayersByTeam');
    // try {
    //   setIsLoading(true);
    //   const playersByTeam = await playersGetByGroupAndTeam(group, team);
    //   setPlayers(playersByTeam);
    // } catch (error) {
    //   console.log(error);
    //   Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
    // } finally {
    //   setIsLoading(false);
    // }
  }

  async function handlePlayerRemove(playerName: string) {
    console.log('handlePlayerRemove');
    // try {
    //   await playerRemoveByGroup(playerName, group);

    //   fetchPlayersByTeam();
    // } catch (error) {
    //   console.log(error);

    //   Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
    // }
  }

  async function groupRemove() {
    console.log('groupRemove');
    // try {
    //   await groupRemoveByName(group);
    //   navigation.navigate('groups');
    // } catch (error) {
    //   console.log(error);
    //   Alert.alert('Remover Grupo', 'Não foi posível remover o grupo');
    // }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja remover a turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => groupRemove() },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton />

      <HighLight title={group} subtitle="adicione a galera e separe os times" />

      <View style={styles.form}>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </View>

      <View style={styles.form}>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Filter title={item} onPress={() => setTeam(item)} />}
          horizontal
        />

        <Text style={styles.numberOfPlayers}>{players.length}</Text>
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard name={item.name} onRemove={() => handlePlayerRemove(item.name)} />
          )}
          ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time" />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
        />
      )}

      <Button title="Remover Turma" onPress={handleGroupRemove} />
    </SafeAreaView>
  );
}
