import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexHomes from "../screens/Home/IndexHome";
import Login from "../screens/Authentication/Login";
import Register from "../screens/Authentication/Register";

const Stack = createStackNavigator();

export default function Homescreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={IndexHomes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function AuthenticationScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginStack"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterStack"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BottomStack"
                component={IndexHomes}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
