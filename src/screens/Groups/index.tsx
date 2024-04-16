import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { groupsGetAll } from '@storage/group/groupsGetAll';
import { useState, useCallback } from 'react';
import { Alert, FlatList, View } from 'react-native';

import { styles } from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Highlight from '@/components/Highlight';
import Loading from '@/components/Loading';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </View>
  );
}
