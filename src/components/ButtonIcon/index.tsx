import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons style={styles.icon} name={icon} size={24} />
    </TouchableOpacity>
  );
}
