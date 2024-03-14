import { Box, Image, Text, Button } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { Dimensions } from "react-native";
import datas from "../mocks/question.json";
import { NavigateProps } from "../types/navigationType";
import { QuestionInterface } from "../interfaces/questionInterface";
import QuestionTimer from "../features/QuestionTimer";
const { height } = Dimensions.get("window");
const medal = require("../assets/medal.png");
const avatar = require("../assets/avatar.png");

const Question = ({ navigation }: NavigateProps) => {
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    number | null
  >(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerBackground, setAnswerBackground] = useState<string>("white");
  const [poin, setPoin] = useState<number>(0);
  const [validation, setValidation] = useState<boolean>(false);

  useEffect(() => {
    setQuestions(datas);
    setCurrentQuestionIndex(0);
  }, [datas]);

  const currentQuestion = questions[currentQuestionIndex!];

  const onTimeUp = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex! < questions.length - 1) {
        return prevIndex! + 1;
      } else {
        setTimeout(() => {
          navigation.navigate("TesterPage");
        }, 2000);
        return null;
      }
    });
  };

  useEffect(() => {
    if (validation) {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setAnswerBackground("#4caf50");
        setPoin(poin + 100);
      } else {
        setAnswerBackground("#f44336");
      }
    } else {
      setAnswerBackground("#fff")
    }
  }, [validation, selectedAnswer]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

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

        {currentQuestion ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box marginTop={30}>
              <QuestionTimer onTimeUp={onTimeUp} setValidation={setValidation} />
            </Box>

            <Text marginTop={30} color="$white">
              {currentQuestion.question}
            </Text>

            <Box gap={10} marginTop={50}>
              <Button
                style={{
                  backgroundColor:
                    selectedAnswer === currentQuestion.option1
                      ? answerBackground
                      : "white",
                  padding: 10,
                  width: 300,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => handleAnswerSelect(currentQuestion.option1)}
              >
                <Text>{currentQuestion.option1}</Text>
                {selectedAnswer === currentQuestion.option1 ? (
                  <Image source={avatar} alt={"avatar"} w={20} h={20} />
                ) : null}
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedAnswer === currentQuestion.option2
                      ? answerBackground
                      : "white",
                  padding: 10,
                  width: 300,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => handleAnswerSelect(currentQuestion.option2)}
              >
                <Text>{currentQuestion.option2}</Text>
                {selectedAnswer === currentQuestion.option2 ? (
                  <Image source={avatar} alt={"avatar"} w={20} h={20} />
                ) : null}
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedAnswer === currentQuestion.option3
                      ? answerBackground
                      : "white",
                  padding: 10,
                  width: 300,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => handleAnswerSelect(currentQuestion.option3)}
              >
                <Text>{currentQuestion.option3}</Text>
                {selectedAnswer === currentQuestion.option3 ? (
                  <Image source={avatar} alt={"avatar"} w={20} h={20} />
                ) : null}
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedAnswer === currentQuestion.option4
                      ? answerBackground
                      : "white",
                  padding: 10,
                  width: 300,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => handleAnswerSelect(currentQuestion.option4)}
              >
                <Text>{currentQuestion.option4}</Text>
                {selectedAnswer === currentQuestion.option4 ? (
                  <Image source={avatar} alt={"avatar"} w={20} h={20} />
                ) : null}
              </Button>
            </Box>

            <Box position="absolute" zIndex={100} bottom={-280}>
              <Text color='$white'>{currentQuestion.id}/{questions.length}</Text>
            </Box>
          </Box>
        ) : (
          <Box>
            <Text>Quiz complete!</Text>
          </Box>
        )}
      </Box>
    </LinearGradient>
  );
};

export default Question;
