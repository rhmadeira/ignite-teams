import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';

import Loading from '@/components/Loading';
import RootStack from '@/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <RootStack />
    </>
  );
}
