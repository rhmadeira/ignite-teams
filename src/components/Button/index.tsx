import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

import theme from '@/theme';

type Props = TouchableOpacityProps & {
  title: string;
  type?: 'primary' | 'secondary';
};

export default function Button({ title, type = 'primary', ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK },
      ]}
      {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
