import { Box, Image, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { Dimensions } from "react-native";
import { NavigateProps } from "../types/navigationType";
import QuestionsComponent from "../components/question/QuestionsComponent";
import usePlayersStore from "../store/usePlayersStore";
import { io } from "socket.io-client";
import { SOCKET_API } from "@env";
const { height } = Dimensions.get("window");
const medal = require("../../assets/medal.png");

const Question = ({ navigation }: NavigateProps) => {
  const [poin, setPoin] = useState<number>(0);
  const [isQuestion, setIsQuestion] = useState<boolean>(false);
  const [dataQuestion, setDataQuestion] = useState({});
  const [timer, setTimer] = useState<any>(null);
  const { players } = usePlayersStore();

  // useEffect(() => {
  //   const socket = io(SOCKET_API);

  //   socket.emit("dataPlayers", players);

  //   socket.on("game", (data) => {
  //     console.log("data question :", data);

  //     setDataQuestion(data);
  //     // const { question, option } = data
  //   });

  //   socket.on("countdownQuestions", (countdown) => {
  //     console.log("countdown :", countdown);

  //     setTimer(countdown);
  //     if (countdown == 15) {
  //       setIsQuestion(true);
  //     }
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  console.log("data players: ", players);
  

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <Box
        h={height - 150}
        w={"90%"}
        bg="#12242e75"
        padding={20}
        rounded={10}
        display={"flex"}
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          w={"100%"}
          gap={10}
        >
          <Image source={medal} alt={"medal"} w={28} h={28} />
          <Text color={"$white"} fontWeight="$bold" fontSize={"$xl"}>
            {poin}
          </Text>
        </Box>

        <QuestionsComponent
          navigation={navigation}
          poin={poin}
          setPoin={setPoin}
        />
      </Box>
    </LinearGradient>
  );
};

export default Question;
