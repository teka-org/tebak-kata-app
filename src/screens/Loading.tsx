import { Image } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { postAPI } from "../libs/axios";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { NavigateProps } from "../types/navigationType";
import { useUser } from "@clerk/clerk-expo";
import { useUserEmailStore } from "../store/useUserEmailStore";
import { useUserStore } from "../store/useUserStore";
const loading = require("../../assets/loading4.gif");
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import Home from "./Home";
import { useIsLoggedInStore } from "../store/useIsLoggedInStore";

const Loading = ({ navigation }: NavigateProps) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [currentEmail, setCurrentEmail] = useState<any>("");
  const email = useUserEmailStore((state) => state.userEmail);
  const setEmail = useUserEmailStore((state) => state.setUserEmail);
  const setCurrentUsername = useUserStore((state) => state.setName);
  const setCurrentAvatar = useUserStore((state) => state.setAvatar);
  const setCurrentDiamond = useUserStore((state) => state.setDiamond);
  const setCurrentId = useUserStore((state) => state.setId);
  const isLoggedIn = useIsLoggedInStore((state) => state.isLoggedIn);
  const id = useUserStore((state) => state.id);

  const validateEmail = async () => {
    try {
      console.log("email di validation email : ", email);
      console.log("currentEmail :",currentEmail);
      

      const response = await postAPI.post("/api/users/login", {
        email: currentEmail,
      });

      const user = response.data.data;
      console.log("response :", response.data);

      if (response.data) {
        setCurrentId(user.id);
        setCurrentUsername(user.name);
        setCurrentAvatar(user.avatar);
        setCurrentDiamond(user.diamond);
        // setTimeout(() => {
          navigation.navigate("Home");
        // }, 2000);
      } 

      // console.log("user :", response.data.data);
    } catch (error) {
      console.log("Error fetching data :", error);
      // setTimeout(() => {
        setCurrentId('');
        setCurrentUsername('');
        setCurrentAvatar('');
        setCurrentDiamond(0);
        navigation.navigate("ChooseAvatar");
      // }, 2000);
    }
  };

  useEffect(() => {
    // if (isLoggedIn) {
    //   navigation.navigate('Home')
    // } else if ()

    if (isLoaded && isSignedIn) {
      setCurrentEmail(user.emailAddresses[0].emailAddress)
      setEmail(user.emailAddresses[0].emailAddress);
      console.log("email clerk :", user.emailAddresses[0].emailAddress);

      console.log("email di useeffect :", currentEmail);
      if (currentEmail) {
        validateEmail();
      }
    }
    console.log("email di useeffect :", email);
  }, [isLoaded, isSignedIn, user, email, currentEmail]);

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <Image
        source={loading}
        alt={"loading"}
        w={300}
        h={300}
        bg={"#ffffffd8"}
        rounded={20}
        borderWidth={5}
        borderColor={"#F9CD68"}
      />
    </LinearGradient>
  );
};

export default Loading;
