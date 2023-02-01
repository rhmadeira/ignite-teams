import { Groups } from "@screens/Groups";
import { StatusBar } from "react-native";
import theme from "./src/theme"; //Irei usar o tema somente nesse arquivo
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <ActivityIndicator />;
  // }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent //para o statusbar ficar por cima do conteúdo
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
