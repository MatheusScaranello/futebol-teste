import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Game from "../screens/Game";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="Game"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
