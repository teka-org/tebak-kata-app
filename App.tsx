import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GluestackUIProvider, Box, Text  } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config"
import SplashScreen from './pages/SplashScreen';
import Register from './pages/Register';
import Home from './pages/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splashscreen" component={SplashScreen} options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register" component={Register} options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home" component={Home} options={{ headerShown: false }}
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
    height: '100%',
    width: '100%'
  },
});