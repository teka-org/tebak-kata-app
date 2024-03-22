import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import SplashScreen from "./src/screens/SplashScreen";
import Home from "./src/screens/Home";
import ChooseAvatar from "./src/screens/ChooseAvatar";
import Room from "./src/screens/Room";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import Question from "./src/screens/Question";
import Ranking from "./src/screens/Ranking";
import Loading from "./src/screens/Loading";

// htp://192.168.18.233:e3a8-2404-8000-1095-99a-19ef-f7c0-a916-4de4.ngrok-free.app/waitingroom

const Stack = createNativeStackNavigator();
const publishedKey = "pk_test_ZmxlZXQtaGVuLTY4LmNsZXJrLmFjY291bnRzLmRldiQ";

export default function App() {
  // const [connected, setConnected] = useState(false)

  return (
    <GluestackUIProvider config={config}>
      <ClerkProvider publishableKey={publishedKey}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splashscreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Loading"
              component={Loading}
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
              name="Question"
              component={Question}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Ranking"
              component={Ranking}
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
      </ClerkProvider>
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
