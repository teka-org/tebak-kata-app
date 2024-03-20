import { useState, useEffect } from "react";
import { Text, View, Button, ButtonText } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../component/Navbar";
import UserCard from "../component/room/UserCard";
import Countdown from "../features/Countdown";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { NavigateProps } from "../types/navigationType";
import { io, Socket } from "socket.io-client";
import React from "react";
// import { Dimensions } from "react-native";
// const { width } = Dimensions.get("window");

const Room = ({ navigation }: NavigateProps) => {
  const [userCards, setUserCards] = useState<number[]>([]);
  const [totalUser, setTotaluser] = useState<number>(0)
  const [countdown, setCountDown] = useState(0)
  
  useEffect(() => {
    const socket = io(
      "https://1d62-2404-8000-1095-99a-c17a-f006-667c-48e2.ngrok-free.app"
    );

    // socket.on("connection", (socket) => {
    //   console.log("Connected to server");
    //   console.log("socket :", socket);
    // });
    
    socket.on('usersCount', (count) => {
      setTotaluser(count)
      // console.log(count)
    })

    socket.on('countdown', (seconds) => {
      setCountDown(seconds)
      // console.log("seconds :", seconds);
      if (seconds === 0) {
        navigation.navigate("Question");
      }
    })

    socket.on('usersInWaitingRoom', (players) => {
      console.log("players :", players);
    })

    return () => {
      socket.disconnect()
    }
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

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <Navbar navigation={navigation} />
      <View h={"80%"} marginTop={50} display="flex" alignItems="center">
        {/* <Countdown navigation={navigation} /> */}
        <Text fontSize={'$5xl'}>00 : { countdown < 10 ? "0" + countdown : countdown}</Text>

        <Text fontSize={"$3xl"}>Finding Opponent</Text>
        <Text fontSize={"$2xl"}>
          <Text fontSize={"$2xl"} color={'$yellow400'}>{totalUser}</Text>
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
