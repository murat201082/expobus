import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from "./src/Main";
import Login from "./src/Login";
import Register from "./src/Register";
import SelectSeat from "./src/SelectSeat";
import TurnAndBack from "./src/TurnAndBack";
import PaymentScreen from "./src/PaymentScreen";

function LoginScreen() {
  return <Login />;
}
function RegisterScreen() {
  return <Register />;
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
     
        <Stack.Navigator>
          <Stack.Screen name="Root" component={Root} />

          <Stack.Screen name="SelectSeat" component={SelectSeat} />
          <Stack.Screen name="TurnAndBack" component={TurnAndBack} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;
