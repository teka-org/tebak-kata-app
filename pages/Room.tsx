import { useState, useEffect } from "react";
import { Text, View, Button, ButtonText } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../component/Navbar";
import UserCard from "../component/room/UserCard";
import Countdown from "../features/countdown";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { NavigateProps } from "../types/navigationType";
// import { Dimensions } from "react-native";
// const { width } = Dimensions.get("window");

const Room = ({ navigation }: NavigateProps) => {
  const [userCards, setUserCards] = useState<number[]>([]);

  const addUserCard = () => {
    setUserCards((prevUserCards) => [
      ...prevUserCards,
      prevUserCards.length + 1,
    ]);
  };

  useEffect(() => {
    if (userCards.length == 5) {
      navigation.navigate("Home");
    }
  }, [userCards]);

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <Navbar navigation={navigation} />
      <View
        h={"80%"}
        marginTop={50}
        display="flex"
        alignItems="center"
      >
        <Countdown navigation={navigation} />

        <Text fontSize={"$3xl"}>Finding Opponent</Text>
        <Text fontSize={"$2xl"}>{userCards.length > 0 ? userCards.length : 0}/5</Text>

        <View gap={10} marginTop={20}>
          {userCards.map((id) => (
            <UserCard key={id} />
          ))}
        </View>
        <Button position="absolute" bottom={0} onPress={addUserCard}>
          <ButtonText>Add User</ButtonText>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default Room;