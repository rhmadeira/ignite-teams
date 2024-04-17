import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome size={24} color="#7A7A80" style={styles.icon} name="home" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
