import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CheckLogin from "./src/screens/Authentication/CheckLogin";
import {MyLoginProvider} from "./src/Provider/LoginProvider";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
        <MyLoginProvider>
          <CheckLogin/>
        </MyLoginProvider>
      </NavigationContainer>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
