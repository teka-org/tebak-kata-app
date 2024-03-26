import { Text, Button, ButtonText } from "@gluestack-ui/themed";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigateProps } from "../types/navigationType";
import { LinearGradientStyles } from "../styles/LinearGradientStyle";
import NavbarHome from "../components/home/NavbarHome";
import AvatarCard from "../components/home/AvatarCard";
import ChangeAvatarModal from "../components/home/ChangeAvatarModal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@clerk/clerk-expo";
import { useUserStore } from "../store/useUserStore";
import { getAPI } from "../libs/axios";
import { useEffect } from "react";
import usePlayersStore from "../store/usePlayersStore";
import { useUserEmailStore } from "../store/useUserEmailStore";
import { useIsLoggedInStore } from "../store/useIsLoggedInStore";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import SplashScreen from "./SplashScreen";



const Home = ({ navigation }: NavigateProps) => {
  const id = useUserStore((state) => state.id)
  const username = useUserStore((state) => state.name);
  const avatar = useUserStore((state) => state.avatar);
  const email = useUserEmailStore((state) => state.userEmail)
  const setIsLoggedIn = useIsLoggedInStore((state) => state.setIsLoggedIn)
  const { players, setPlayers } = usePlayersStore();

  
  useEffect(() => {
    // if (!isLoggedIn) {
    //   navigation.navigate("Splashscreen")
    // }
    setIsLoggedIn(true)
    console.log("players di home :", players);
    console.log("email di home:", email);
  }, [])

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
          // setEmail(null)
          setIsLoggedIn(false)
          signOut();
          navigation.navigate("Splashscreen");
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
      {/* <SignedIn> */}
        <>
          <NavbarHome />

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <AvatarCard avatar={avatar} avatarSize={'2xl'} />

            <ChangeAvatarModal />

            <Text size="xl" color="$white" marginTop={10}>
              {username}
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
              onPress={() => navigation.navigate("Ranking")}
            >
              <ButtonText textTransform="uppercase" size="xl">
                Tester page
              </ButtonText>
            </Button>
          </View>
          <SignOut />
        </>
      {/* </SignedIn>

      <SignedOut>
        <SplashScreen navigation={navigation} />
      </SignedOut> */}
    </LinearGradient>
  );
};

export default Home;
