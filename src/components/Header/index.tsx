// import logoImg from '@assets/logo.png';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

type Props = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <View>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}
      {/* <Image source={logoImg} style={styles.logo} /> */}
    </View>
  );
}
