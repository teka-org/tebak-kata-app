import { Text, Button, ButtonText } from "@gluestack-ui/themed";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigateProps } from "../types/navigationType";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import NavbarHome from "../component/home/NavbarHome";
import AvatarCard from "../component/AvatarCard";
import ChangeAvatarModal from "../component/home/ChangeAvatarModal";
const avatar = require("../assets/avatar.png");
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import SplashScreen from "./SplashScreen";
import UseUserExample from "../component/UseUserExample";

const Home = ({ navigation }: NavigateProps) => {
  const SignOut = () => {
    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
    return (
      <Button
        bg={"$red500"}
        bottom={50}
        gap={10}
        onPress={() => {
          signOut();
        }}
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          style={{ color: "white" }}
        />
        <ButtonText color={"$white"}>Logout</ButtonText>
      </Button>
    );
  };

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#BDCDD4"]}
      style={LinearGradientStyles.container}
    >
      <SignedIn>
        <>
          <NavbarHome />

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <AvatarCard avatar={avatar} />

            <ChangeAvatarModal />

            <Text size="xl" color="$white" marginTop={10}>
              Spideysheree
            </Text>

            <Button
              bg={"#0ACF83"}
              borderWidth={1}
              borderColor={"white"}
              marginTop={100}
              marginBottom={-80}
              onPress={() => navigation.navigate("Room")}
            >
              <ButtonText textTransform="uppercase" size="xl">
                start game
              </ButtonText>
            </Button>
            <Button
              bg={"#0ACF83"}
              borderWidth={1}
              borderColor={"white"}
              marginTop={100}
              marginBottom={-80}
              onPress={() => navigation.navigate("TesterPage")}
            >
              <ButtonText textTransform="uppercase" size="xl">
                Tester page
              </ButtonText>
            </Button>
          </View>
          <SignOut />
          <UseUserExample />
        </>
      </SignedIn>

      <SignedOut>
        <SplashScreen navigation={navigation} />
      </SignedOut>
    </LinearGradient>
  );
};

export default Home;
