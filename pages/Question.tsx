import { Box, Image, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { Dimensions } from "react-native";
import { NavigateProps } from "../types/navigationType";
import QuestionsComponent from "../component/question/QuestionsComponent";
const { height } = Dimensions.get("window");
const medal = require("../assets/medal.png");

const Question = ({ navigation }: NavigateProps) => {;
  const [poin, setPoin] = useState<number>(0);

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

        <QuestionsComponent navigation={navigation} poin={poin} setPoin={setPoin} />
      </Box>
    </LinearGradient>
  );
};

export default Question;
