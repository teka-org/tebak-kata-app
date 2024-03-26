import { useState, useEffect } from "react";
import { Text, View, Button, ButtonText } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../components/Navbar";
import UserCard from "../components/room/UserCard";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { NavigateProps } from "../types/navigationType";
import { io } from "socket.io-client";
import React from "react";
import { useUserStore } from "../store/useUserStore";
import { SOCKET_API } from "@env";
import usePlayersStore from "../store/usePlayersStore";
// import { Dimensions } from "react-native";
// const { width } = Dimensions.get("window");

const Room = ({ navigation }: NavigateProps) => {
  const [userCards, setUserCards] = useState<number[]>([]);
  const [totalUser, setTotaluser] = useState<number>(0);
  const [countdown, setCountDown] = useState(0);
  const { players, setPlayers } = usePlayersStore();
  const id = useUserStore((state) => state.id);
  console.log("id :", id);
  

  useEffect(() => {
    const socket = io(SOCKET_API);

    socket.on("usersCount", (count) => {
      setTotaluser(count);
      // console.log(count)
    });

    socket.on("countdown", (seconds) => {
      setCountDown(seconds);
      // console.log("seconds :", seconds);
      if (seconds === 0) {
        navigation.navigate("Question");
      }
    });
    socket.emit("dataPlayer", id);

    socket.on("usersInRoom", (players) => {
      // console.log("players :", players);
      setPlayers(players)
    });

    socket.on("moveTogameRoom", () => {
      navigation.navigate("Question")
    })

    socket.on('timeout', (time) => {
      console.log("timeout :", time);
      
    })

    return () => {
      socket.disconnect();
    };
  }, []);

  const addUserCard = () => {
    setUserCards((prevUserCards) => [
      ...prevUserCards,
      prevUserCards.length + 1,
    ]);
  };

  useEffect(() => {
    if (userCards.length == 5) {
      navigation.navigate("Question");
    }
  }, [userCards]);

  console.log("players di zustand :", players);

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <Navbar navigation={navigation} />
      <View h={"80%"} marginTop={50} display="flex" alignItems="center">
        {/* <Countdown navigation={navigation} /> */}
        <Text fontSize={"$5xl"}>
          00 : {countdown < 10 ? "0" + countdown : countdown}
        </Text>

        <Text fontSize={"$3xl"}>Finding Opponent</Text>
        <Text fontSize={"$2xl"}>
          <Text fontSize={"$2xl"} color={"$yellow400"}>
            {totalUser}
          </Text>
          /5
        </Text>

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
