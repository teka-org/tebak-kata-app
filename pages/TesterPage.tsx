import { Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../component/Navbar";
import Countdown from "../features/Countdown";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import { NavigateProps } from "../types/navigationType";

const TesterPage = ({ navigation }: NavigateProps) => {
  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <Navbar navigation={navigation} />

      <Text>Testt</Text>
    </LinearGradient>
  );
};

export default TesterPage;
