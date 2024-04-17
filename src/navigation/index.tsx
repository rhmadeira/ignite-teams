import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { Groups } from '@/screens/Groups';
import { NewGroup } from '@/screens/NewGroup';
import { Players } from '@/screens/Players';

export type RootStackParamList = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="groups" component={Groups} />
          <Stack.Screen name="new" component={NewGroup} />
          <Stack.Screen name="players" component={Players} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
