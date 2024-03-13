import { Avatar, AvatarImage, Text } from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import { View, StyleSheet } from "react-native";
const avatar = require("../../assets/avatar.png");
const { width } = Dimensions.get("window");

const UserCard = () => {
  return (
    <View style={styles.container}>
      <Avatar size="lg">
        <AvatarImage source={avatar} alt={"avatar user"} objectFit="contain" />
      </Avatar>

      <Text color={"$white"} fontWeight={"$semibold"} fontSize={"$lg"}>
        User1
      </Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    width: width - 100,
    backgroundColor: "#0870a0",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
