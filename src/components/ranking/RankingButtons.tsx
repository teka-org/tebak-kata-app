import { Box, Button, ButtonText } from "@gluestack-ui/themed";
import { NavigationProp } from "@react-navigation/native";
import React from "react";

const RankingButtons = ({ navigation }: any) => {
  return (
    <Box display="flex" flexDirection="row" gap={20}>
      <Button
        bg={"#CF0A0A"}
        borderWidth={1}
        borderColor={"white"}
        borderRadius={7}
        marginTop={100}
        marginBottom={-80}
        onPress={() => navigation.navigate("Home")}
      >
        <ButtonText size="xl">Return to Home</ButtonText>
      </Button>

      <Button
        bg={"#0ACF83"}
        borderWidth={1}
        borderColor={"white"}
        borderRadius={7}
        marginTop={100}
        marginBottom={-80}
        onPress={() => navigation.navigate("Room")}
      >
        <ButtonText size="xl">Play Again</ButtonText>
      </Button>
    </Box>
  );
};

export default RankingButtons;
