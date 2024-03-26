import {
  Box,
  Image,
  Text,
  Button,
  Progress,
  ProgressFilledTrack,
} from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import datas from "../../mocks/question.json";
import { IQuestion } from "../../interfaces/IQuestion";
import QuestionTimer from "../../features/QuestionTimer";
import usePlayersStore from "../../store/usePlayersStore";
import { io } from "socket.io-client";
import { SOCKET_API } from "@env";
const avatar = require("../../../assets/avatar.png");

interface Props {
  navigation: any;
  poin: number;
  setPoin: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionsComponent: React.FC<Props> = ({ navigation, poin, setPoin }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [totalQuestion, setTotalQuestion] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [validation, setValidation] = useState<boolean>(false);
  const [isQuestion, setIsQuestion] = useState<boolean>(false);
  const [dataQuestion, setDataQuestion] = useState<any>([]);
  const [timer, setTimer] = useState<any>(null);
  const { players } = usePlayersStore();
  const [moveScreen, setMoveScreen] = useState<boolean>(false)

  useEffect(() => {
    console.log("players di questionComponent :", players);

    const socket = io(SOCKET_API);

    socket.emit("dataPlayers", players);

    socket.on("game", (data) => {
      // console.log("data question :", data);

      setDataQuestion(data);
    });

    socket.on("countdownQuestions", (countdown) => {
      console.log("countdown :", countdown);

      setTimer(countdown);
      if (countdown == 15) {
        setIsQuestion(true);
      } else if (countdown == 5) {
        setValidation(true);
        console.log("validation :", validation);
      } else if (countdown == 0) {
        setValidation(false);
        console.log("validation :", validation);
      }
    });

    socket.on("totalQuestions", (e) => {
      console.log("total question :", e);
      setTotalQuestion(e);
      if (e == 9) {
        setMoveScreen(true)
        console.log("moveScreen :", moveScreen);
        
      }

      if (!moveScreen && e == 0) {
        socket.on("disconnect", () => {
          console.log("user was disconnected!");
        })
    
        socket.disconnect();
        navigation.navigate("Ranking");
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (selectedAnswer == dataQuestion.answer) {
      setIsCorrect(true);
    } else if (selectedAnswer != dataQuestion.answer) {
      setIsCorrect(false);
    }

    if (validation && isCorrect && selectedAnswer) {
      setPoin(poin + 100);
    }
  }, [selectedAnswer, validation, isCorrect, dataQuestion]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    console.log("answer :", answer);
  };

  // console.log("question :", questions);

  return (
    <>
      {!isQuestion && timer == 0 ? null : !isQuestion ? (
        <Text>{timer}</Text>
      ) : isQuestion ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Text fontSize={'$2xl'} color={'$white'}>00 : {timer < 10 ? "0" + timer : timer}</Text>

          <Text
            marginTop={40}
            fontSize={"$2xl"}
            textAlign="center"
            color="$white"
          >
            {dataQuestion.question}
          </Text>

          <Box gap={10} marginTop={50}>
            {dataQuestion &&
              dataQuestion.options.map((item: any, index: number) => {
                return (
                  <Button
                    key={index}
                    style={{
                      backgroundColor:
                        isCorrect && selectedAnswer == item && validation
                          ? "#4caf50"
                          : !isCorrect && selectedAnswer == item && validation
                          ? "#f44336"
                          : item == dataQuestion.answer && validation
                          ? "#4caf50"
                          : "white",
                      // backgroundColor: "white",
                      padding: 10,
                      width: 300,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: 50,
                    }}
                    onPress={() => handleAnswerSelect(item)}
                    disabled={validation ? true : false}
                  >
                    <Text>{item}</Text>
                    {selectedAnswer == item ? (
                      <Image source={avatar} alt={"avatar"} w={20} h={20} />
                    ) : null}
                  </Button>
                );
              })}
          </Box>

          <Box
            position="absolute"
            display="flex"
            alignItems="center"
            gap={10}
            zIndex={100}
            top={600}
          >
            {/* <Text color="$white">
              {currentQuestionIndex + 1}/{questions.length}
            </Text> */}
            <Text color="$white">{(10 - totalQuestion!)}/10</Text>
            <Progress
              value={10 * (10 - totalQuestion!)}
              w={300}
              size="md"
            >
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Box>
      ) : (
        <Box>
          <Text>Quiz Complete!</Text>
        </Box>
      )}
    </>
  );
};

export default QuestionsComponent;
