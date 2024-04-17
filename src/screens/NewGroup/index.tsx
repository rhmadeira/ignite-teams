import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';

import { styles } from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Highlight from '@/components/Highlight';
import { Input } from '@/components/Input';
import { AppError } from '@/utils/AppError';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew() {
    console.log('handleNew');
    // try {
    //   if (group.trim().length === 0) {
    //     return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
    //   }

    //   await groupCreate(group);
    //   navigation.navigate('players', { group });
    // } catch (error) {
    //   if (error instanceof AppError) {
    //     Alert.alert('Novo Grupo', error.message);
    //   } else {
    //     Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
    //     console.log(error);
    //   }
    // }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton />

      <View style={styles.content}>
        <FontAwesome name="users" size={56} color="#00FF00" style={styles.icon} />
        <Highlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </View>
    </SafeAreaView>
  );
}
