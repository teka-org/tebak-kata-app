import { Box, Image, Text, Button } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import datas from "../../mocks/question.json";
import { QuestionInterface } from "../../interfaces/questionInterface";
import { NavigateProps } from "../../types/navigationType";
import QuestionTimer from "../../features/QuestionTimer";
const avatar = require("../../assets/avatar.png");

interface Props {
    navigation: any;
    poin: number;
    setPoin: React.Dispatch<React.SetStateAction<number>>;
  }

const QuestionsComponent : React.FC<Props> = ({ navigation, poin, setPoin } ) => {
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    number
  >(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerBackground, setAnswerBackground] = useState<string>("white");
  const [validation, setValidation] = useState<boolean>(false);
  const [bgOption1, setBgOption1] = useState<string>("white");
  const [bgOption2, setBgOption2] = useState<string>("white");
  const [bgOption3, setBgOption3] = useState<string>("white");
  const [bgOption4, setBgOption4] = useState<string>("white");

  useEffect(() => {
    setQuestions(datas);
    setCurrentQuestionIndex(0);
  }, [datas]);

  const currentQuestion = questions[currentQuestionIndex!];

  const onTimeUp = () => {
    setCurrentQuestionIndex((prevIndex): number | any => {
      if (prevIndex! < questions.length - 1) {
        return prevIndex! + 1;
      } else {
        setTimeout(() => {
          navigation.navigate("TesterPage");
        }, 2000);
        return null
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

      if (currentQuestion.option1 === currentQuestion.correctAnswer) {
        setBgOption1("#4caf50");
      } else if (currentQuestion.option2 === currentQuestion.correctAnswer) {
        setBgOption2("#4caf50");
      } else if (currentQuestion.option3 === currentQuestion.correctAnswer) {
        setBgOption3("#4caf50");
      } else if (currentQuestion.option4 === currentQuestion.correctAnswer) {
        setBgOption4("#4caf50");
      }
    } else {
      setAnswerBackground("#fff");
      setBgOption1("#fff");
      setBgOption2("#fff");
      setBgOption3("#fff");
      setBgOption4("#fff");
    }
  }, [validation, selectedAnswer]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <>
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
                    : bgOption1
                    ? bgOption1
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
              disabled={validation}
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
                    : bgOption2
                    ? bgOption2
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
              disabled={validation}
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
                    : bgOption3
                    ? bgOption3
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
              disabled={validation}
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
                    : bgOption4
                    ? bgOption4
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
              disabled={validation}
            >
              <Text>{currentQuestion.option4}</Text>
              {selectedAnswer === currentQuestion.option4 ? (
                <Image source={avatar} alt={"avatar"} w={20} h={20} />
              ) : null}
            </Button>
          </Box>

          <Box position="absolute" zIndex={100} bottom={-280}>
            <Text color="$white">
              {currentQuestion.id}/{questions.length}
            </Text>
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
