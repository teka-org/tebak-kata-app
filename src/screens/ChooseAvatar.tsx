import { View } from "react-native";
import {
  Text,
  Button,
  Image,
  Box,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import {Alert} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { NavigateProps } from "../types/navigationType";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { useState, useEffect } from "react";
import { getAPI, postAPI } from "../libs/axios";
import { useUserEmailStore } from "../store/useUserEmailStore";
import { useUserStore } from "../store/useUserStore";

const ChooseAvatar = ({ navigation }: NavigateProps) => {
  const [avatars, setAvatars] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const email = useUserEmailStore((state) => state.userEmail);
  const setCurrentUsername = useUserStore((state) => state.setName)
  const setCurrentAvatar = useUserStore((state) => state.setAvatar)
  const setCurrentDiamond = useUserStore((state) => state.setDiamond)
  const setCurrentId = useUserStore((state) => state.setId)
  const avatar1 =
    "https://i.pinimg.com/736x/22/ab/61/22ab61657f143d636535a7afa6e5c027.jpg";
  const avatar2 =
    "https://i.pinimg.com/736x/72/3e/68/723e6885cbea3d2c94cb05f4f02da7a4.jpg";

  useEffect(() => {
    console.log("avatar :", avatars);
    console.log("username :", username);
    console.log("email :", email);
    
  }, [avatars, username, email]);

  const handleSubmit = async () => {
    try {
      const response = await postAPI.post('/api/user', {
        name: username,
        email: email,
        avatar: avatars
      })

      console.log("response :", response.data[0].diamond);
      setCurrentUsername(username)
      setCurrentAvatar(avatars)
      // setCurrentId()
      setAvatars(avatars)
      // navigation.navigate("Home")
    } catch (error) {
      console.log("Error");
      Alert.alert("Error while Register!")
    }
  }

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Box display="flex" flexDirection="row" gap={10}>
          <Button
            w={90}
            h={90}
            bg={"transparent"}
            onPress={() => setAvatars(avatar1)}
          >
            <Image
              source={{
                uri: avatar1,
              }}
              alt={"avatar1"}
              w={"100%"}
              h={"60%"}
              objectFit={"cover"}
              rounded={"$full"}
            />
          </Button>

          <Button
            w={90}
            h={90}
            bg={"transparent"}
            onPress={() => setAvatars(avatar2)}
          >
            <Image
              source={{
                uri: avatar2,
              }}
              alt={"avatar2"}
              w={"100%"}
              h={"60%"}
              objectFit={"cover"}
              rounded={"$full"}
            />
          </Button>
        </Box>

        <Input
          variant="rounded"
          w={"70%"}
          marginVertical={20}
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            placeholder="Input Username"
            onChangeText={(value) => setUsername(value)}
          />
        </Input>

        <Button
          my={20}
          bg={"$white"}
          borderRadius={50}
          onPress={handleSubmit}
        >
          <Text>Register</Text>
        </Button>

        <Button
          bg={"$white"}
          borderRadius={50}
          position={"absolute"}
          bottom={50}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default ChooseAvatar;
