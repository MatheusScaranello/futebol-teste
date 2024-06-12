import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Game from "../screens/Game";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
