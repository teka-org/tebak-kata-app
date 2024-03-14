import { Text } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import { NavigateProps } from "../types/navigationType";

const Countdown = ({ navigation }: NavigateProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setRemainingTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(countdown);
      navigation.navigate("Question");
    }

    return () => clearInterval(countdown);
  }, [remainingTime]);

  const formatTime = (time: number): string => {
    const seconds = time % 60;
    return `00 : ${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return <Text fontSize={"$6xl"} >{formatTime(remainingTime)}</Text>;
};

export default Countdown;
