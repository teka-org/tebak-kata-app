import {
  Avatar,
  AvatarFallbackText,
  Box,
  Image,
  Text,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import RankingButtons from "../component/ranking/RankingButtons";
import { NavigateProps } from "../types/navigationType";
const Bar = require("../assets/barChart.png");
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const Ranking = ({ navigation }: NavigateProps) => {
  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={{ flex: 1, alignItems: "center", paddingVertical: 90 }}
    >
      {/* <Navbar navigation={navigation} /> */}
      <Text fontSize={"$4xl"} color="$white">
        Congrats!
      </Text>
      <Text fontSize={"$3xl"} color="$white">
        You got 1 diamond
      </Text>

      <Box
        w={width - 50}
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        my={15}
        paddingTop={20}
      >
        <Box alignItems="center" marginTop={55}>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Text color="$white">Spideyy</Text>
          <Text color="$white">6000</Text>
        </Box>

        <Box alignItems="center">
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Text color="$white">Spideyy</Text>
          <Text color="$white">6000</Text>
        </Box>

        <Box alignItems="center" marginTop={95}>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Text color="$white">Spideyy</Text>
          <Text color="$white">6000</Text>
        </Box>
      </Box>

      <Box marginTop={-90}>
        <Image
          source={Bar}
          alt={"Bar"}
          w={width - 50}
          h={240}
          objectFit={"cover"}
        />
      </Box>

      <Box
        bg="$white"
        w={width - 30}
        borderRadius={10}
        padding={20}
        gap={20}
        marginTop={-20}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={10}>
            <Avatar bgColor="$amber600" size="md" borderRadius="$full">
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
            </Avatar>
            <Text>Spideyy</Text>
          </Box>

          <Text>5000</Text>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={10}>
            <Avatar bgColor="$amber600" size="md" borderRadius="$full">
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
            </Avatar>
            <Text>Spideyy</Text>
          </Box>

          <Text>5000</Text>
        </Box>
      </Box>

      <Box position="absolute" top={650}>
        <RankingButtons navigation={navigation} />
      </Box>
    </LinearGradient>
  );
};

export default Ranking;
