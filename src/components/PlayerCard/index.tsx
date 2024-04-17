import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../ButtonIcon';

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons style={styles.icon} />
      <Text style={styles.name}>{name}</Text>

      <ButtonIcon icon="close" onPress={onRemove} />
    </View>
  );
}
