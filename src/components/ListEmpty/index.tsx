import { View, Text } from 'react-native';

import { styles } from './styles';
interface ListEmptyProps {
  message?: string;
}

export default function ListEmpty({ message = 'No data found' }: ListEmptyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
