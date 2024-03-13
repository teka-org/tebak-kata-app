import { Text, Button, ButtonText } from "@gluestack-ui/themed";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigateProps } from "../types/navigationType";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import NavbarHome from "../component/home/NavbarHome";
import AvatarCard from "../component/AvatarCard";
import ChangeAvatarModal from "../component/home/ChangeAvatarModal";
const avatar = require("../assets/avatar.png");

const Home = ({ navigation }: NavigateProps) => {
  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <NavbarHome />

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <AvatarCard avatar={avatar} />

        <ChangeAvatarModal />

        <Text size="xl" color="$white" marginTop={10}>
          Spideysheree
        </Text>

        <Button
          bg={"#0ACF83"}
          borderWidth={1}
          borderColor={"#018b56"}
          marginTop={100}
          marginBottom={-80}
          onPress={() => navigation.navigate("Room")}
        >
          <ButtonText textTransform="uppercase" size="xl">
            start game
          </ButtonText>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default Home;
