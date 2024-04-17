// import logoImg from '@assets/logo.png';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import logoImg from '../../../assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Image style={styles.logo} source={logoImg} />
    </View>
  );
}
