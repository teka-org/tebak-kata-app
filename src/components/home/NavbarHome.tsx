import { Box, Image, Button, ButtonText } from "@gluestack-ui/themed";
import DiamondModal from "./DiamondModal";
const logo = require("../../assets/logo2.png");
const diamond = require("../../assets/diamond.png");

const NavbarHome = () => {
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
        marginTop="$1.5"
      />

      <Box display="flex" flexDirection="row" alignItems="center">
        <Image
          source={diamond}
          position="relative"
          zIndex={10}
          alt={"teka"}
          width={25}
          height={25}
          objectFit={"contain"}
          marginRight={-10}
        />

        <Box
          width={90}
          height={20}
          bg="#ffffffce"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ButtonText color="$black" fontWeight={"bold"}>
            999999
          </ButtonText>
        </Box>

        <DiamondModal />
      </Box>
    </Box>
  );
};

export default NavbarHome;
