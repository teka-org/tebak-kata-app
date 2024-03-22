import { Box, Text, Image, Spinner } from "@gluestack-ui/themed";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { NavigateProps } from "../types/navigationType";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
const logo = require("../assets/logo.png");
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import GoogleButtons from "../features/GoogleButtons";
import Home from "./Home";

const SplashScreen = ({ navigation }: NavigateProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <SignedOut>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={logo}
            marginTop={-90}
            alt="Teka"
            w={250}
            h={150}
            objectFit="contain"
          />

          <Box position="absolute" bottom={80}>
            {isLoading ? (
              <Spinner size="small" marginBottom={100} />
            ) : (
              <Box>
                <GoogleButtons navigation={navigation} />

                <Text size="xs" marginTop={100} color="$white">
                  By continuing, you agree to the Terms and Privacy
                </Text>
              </Box>
            )}
          </Box>
        </View>
      </SignedOut>

      <SignedIn>
        <Home navigation={navigation} />
      </SignedIn>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  buttonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "black",
    marginBottom: 4,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
