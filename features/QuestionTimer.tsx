import { Text } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";

interface QuestionTimerProps {
  onTimeUp: () => void;
  setValidation: (validation: boolean) => void;
}

const QuestionTimer = ({ onTimeUp, setValidation }: QuestionTimerProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(20);
  const [nextQuestion, setNextQuestion] = useState<boolean>(false)

  useEffect(() => {
    const countdown = setInterval(() => {
      setRemainingTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(countdown);
      setRemainingTime(5);
      setNextQuestion(true)
      setValidation(true)
    }
    
    if (remainingTime === 0 && nextQuestion) {
      clearInterval(countdown)
      setValidation(false)
      setNextQuestion(false)
      onTimeUp()
      setRemainingTime(20)
    }

    return () => clearInterval(countdown);
  }, [remainingTime, onTimeUp]);

  const formatTime = (time: number): string => {
    const seconds = time % 60;
    return `00 : ${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return <Text fontSize={'$2xl'} color={'$white'} >{formatTime(remainingTime)}</Text>;
};

export default QuestionTimer;