import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Game from "../screens/Game";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Game"
        component={Game}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="Game"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
