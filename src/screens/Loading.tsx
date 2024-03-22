import { Box, Image, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { postAPI } from "../libs/axios";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { NavigateProps } from "../types/navigationType";
const loading = require("../assets/loading4.gif");
import { useUser } from "@clerk/clerk-expo";
import { useUserEmailStore } from "../store/useUserEmailStore";

const Loading = ({ navigation }: NavigateProps) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [userEmail, setUserEmail] = useState<string>("");
  const setEmail = useUserEmailStore((state) => state.setUserEmail);

  const validateEmail = async () => {
    try {
      const response = await postAPI.post("/api/users/login", {
        email: userEmail,
      });

      if (response.data) {

        setTimeout(() => {
          navigation.navigate("Home");
        }, 1000);
      }

      console.log("response :", response.data);
    } catch (error) {
      console.log("Error fetching data :", error);
      setTimeout(() => {
        navigation.navigate("ChooseAvatar");
      }, 1000);
    }
  };

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setUserEmail(user.emailAddresses[0].emailAddress);
      setEmail(user.emailAddresses[0].emailAddress);
      console.log("userEmail :", userEmail);

      if (userEmail) {
        validateEmail();
      }
    }
  }, [isLoaded, isSignedIn, user, userEmail]);

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
