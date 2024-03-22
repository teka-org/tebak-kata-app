import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../libs/useWarmUpBrowser";
import { Text, Image } from "@gluestack-ui/themed";
import { NavigateProps } from "../types/navigationType";
const googleIcon = require("../assets/google.png");
 
WebBrowser.maybeCompleteAuthSession();
 
const GoogleButtons = ({navigation}: NavigateProps) => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        signIn
        signUp
      }
      navigation.navigate("Loading")
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <TouchableOpacity
        style={styles.buttonGoogle}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Image
          source={googleIcon}
          alt={"googleIcon"}
          style={styles.buttonImageIconStyle}
        />
        <Text style={styles.buttonTextStyle}>Sign in with Google</Text>
      </TouchableOpacity>
  );
}
export default GoogleButtons;

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
    // padding: 10,
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