import React from "react";
// import { Button, View } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { NavigateProps } from "../types/navigationType";
import {
  Box,
  Text,
  Image,
  Spinner,
  ButtonText,
} from "@gluestack-ui/themed";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";


import AsyncStorage from "@react-native-async-storage/async-storage";
const googleIcon = require("../assets/google.png");
import { useState, useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton({ navigation }: NavigateProps) {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "723819002472-l53lao3h2md9vpllndrbqs3ef9up9erk.apps.googleusercontent.com",
    iosClientId:
      "723819002472-var6u4f1a62b5lu9p03h2r6915o1bmv6.apps.googleusercontent.com",
    webClientId:
      "723819002472-vcdff7392p038jf66liup4gqu8oale74.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success")
        await getUserInfo(response.authentication?.accessToken);
    } else {
      setUserInfo(JSON.parse(user));
    }
  };

  const getUserInfo = async (token: any) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log("something error!", error);
    }
  };

  //   //   useEffect(() => {
  //   //       AsyncStorage.removeItem("@user");
  //   //       setUserInfo(null);
  //   //
  //   // }, [])

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);
    
  const handleLogout = async () => {
    await AsyncStorage.removeItem("@user");
    setUserInfo(null);
  };

  return (
    <View>
      {/* <Button
        title="Sign in with Google"
        disabled={!request}
        // onPress={() => promptAsync()}
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Logout"
        // disabled={!request}
        onPress={handleLogout}
      /> */}
      {/* <Button
        bg={"$white"}
        borderRadius={50}
        onPress={promptAsync} // Use promptAsync here to initiate Google authentication
    >
        <Image
        source={googleIcon}
        alt={"googleIcon"}
        objectFit="contain"
        width={20}
        height={20}
        marginRight={10}
        />
        <ButtonText color="$black">Continue with Google</ButtonText>
    </Button>

    <Button
        bg={"$white"}
        borderRadius={50}
        onPress={handleLogout}
    >
        <Image
        source={googleIcon}
        alt={"googleIcon"}
        objectFit="contain"
        width={20}
        height={20}
        marginRight={10}
        />
        <ButtonText color="$black">Logout</ButtonText>
    </Button>  */}
      {/* <Text>{JSON.stringify(userInfo, null, 2)}</Text> */}
      
      <TouchableOpacity
        style={styles.buttonGoogle}
        activeOpacity={0.5}
        onPress={() => promptAsync()}
      >
        <Image
            source={googleIcon}
            alt={'googleIcon'}
          style={styles.buttonImageIconStyle}
        />
        <Text style={styles.buttonTextStyle}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
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
    fontWeight: 'bold'
  },
});