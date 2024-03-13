import { StyleSheet } from "react-native";
import { Box, Image, Button } from "@gluestack-ui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { NavigateProps } from "../types/navigationType";
const logo = require("../assets/logo2.png");

const Navbar = ({ navigation }: NavigateProps) => {
  return (
    <Box
      width="100%"
      px={30}
      position="absolute"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      top={70}
    >
      <Image
        source={logo}
        alt={"teka"}
        width={50}
        height={20}
        objectFit={"contain"}
      />

      <Box display="flex" flexDirection="row" alignItems="center">
        <Button
          size={"xs"}
          width="$8"
          marginTop="-$1"
          display="flex"
          bg="transparent"
          borderRadius={100}
          onPress={()=> navigation.navigate("Home")}
        >
          <FontAwesomeIcon
            icon={faXmarkCircle}
            size={32}
            style={styles.closeIcon}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  closeIcon: {
    color: "white",
  },
});
