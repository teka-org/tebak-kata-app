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
import { useAuth } from "@clerk/clerk-expo";

const Home = ({ navigation }: NavigateProps) => {
  
  const SignOut = () => {

    // const [socket, setSocket] = useState<Socket | null>(null);

    // useEffect(() => {
    //   const newSocket = createSocket();
    
    //   setSocket(newSocket);
    
    //   newSocket.on("connect", () => {
    //     console.log("Connected to Socket.IO server");
    //   });
    
    //   newSocket.on("connect_error", (error) => {
    //     console.error("Error connecting to Socket.IO server:", error);
    //   });
    
    //   return () => {
    //     newSocket.disconnect();
    //   };
    // }, []);

    // useEffect(() => {
    //   if (!socket) return;

    //   socket.on("connect", () => {
    //     console.log("Connected to Socket.IO server");
    //   });

    //   socket.on("disconnect", () => {
    //     console.log("Disconnected from Socket.IO server");
    //   });

    //   socket.on("usersCount", (count) => {
    //     console.log("Received data:", count);
    //   });

    //   socket.emit("hello", "hello from client")

    //   return () => {
    //     socket.off("connect");
    //     socket.off("disconnect");
    //     socket.off("some-event");
    //   };
    // }, [socket]);

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
      {/* <SignedIn> */}
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
            onPress={() => navigation.navigate("Ranking")}
          >
            <ButtonText textTransform="uppercase" size="xl">
              Tester page
            </ButtonText>
          </Button>
        </View>
        <SignOut />
      </>
      {/* </SignedIn> */}

      {/* <SignedOut>
        <SplashScreen navigation={navigation} />
      </SignedOut> */}
    </LinearGradient>
  );
};

export default Home;
