import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Box, Button, Image, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { diamondInterface } from "../../interfaces/diamondInterface";

const DiamondCard: React.FC<{ item: diamondInterface }> = ({ item }) => {
  const length = item.id 

  return (
    <LinearGradient
      colors={["#48B8E9", "#48B8E9", "#e9f1f5"]}
      style={{ width: 105, borderRadius: 10 }}
    >
      <Button
        bg="transparent"
        display="flex"
        flexDirection="column"
        w={110}
        height={110}
      >
        <Text color="$white" fontWeight={"$bold"} size="md">
          {item.totalDiamond}
        </Text>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          gap={5}
          my={5}
          height={40}
        >
          {Array.from({ length }, (_, i) => (
            <FontAwesomeIcon key={i} icon={faGem} />
          ))}
        </Box>

        <Text fontWeight={'$semibold'}>{item.price}</Text>
      </Button>
    </LinearGradient>
  );
};

export default DiamondCard;
