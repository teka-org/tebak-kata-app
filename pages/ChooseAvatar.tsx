import { View } from "react-native";
import { Text, Button, Image, Box } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { NavigateProps } from "../types/navigationType";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { useState, useEffect } from "react";
import { getAPI } from "../libs/axios";

const ChooseAvatar = ({ navigation }: NavigateProps) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAPI.get("/api/v1/avatar");
        const avatar = response.data;
        const filtered = avatar.slice(0, 12);
        setAvatars(filtered);
        console.log("response :", response.data);
    } catch (error) {
        console.log("Error fetching data :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Box>
          {avatars.map((item, index) => {
            return (
              <Button
                key={index}
                bg={"$white"}
                borderRadius={50}
                onPress={() => navigation.navigate("Home")}
              >
                <Image source={{ uri: item.image }} alt={item.id} />
                {/* <Text>.</Text> */}
              </Button>
            );
          })}
        </Box>
      </View>
    </LinearGradient>
  );
};

export default ChooseAvatar;
