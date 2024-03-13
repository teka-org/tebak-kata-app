import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import SplashScreen from "./pages/SplashScreen";
import Home from "./pages/Home";
import ChooseAvatar from "./pages/ChooseAvatar";
import TesterPage from "./pages/TesterPage";
import Room from "./pages/Room";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splashscreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChooseAvatar"
            component={ChooseAvatar}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Room"
            component={Room}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TesterPage"
            component={TesterPage}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen
            name="Home"
            options={{
              children: <Main><Home /></Main>
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
