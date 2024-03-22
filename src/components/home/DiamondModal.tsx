import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Button,
  ButtonText,
  Center,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  View,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import datas from "../../mocks/diamond.json";
import { diamondInterface } from "../../interfaces/diamondInterface";
import DiamondCard from "./DiamondCard";

function DiamondModal() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<diamondInterface[]>([]);
  const ref = React.useRef(null);
  console.log("datas :", data);

  useEffect(() => {
    setData(datas);
  }, []);

  return (
    <Center>
      <Button
        size={"xs"}
        py={16}
        display="flex"
        bg="#0ACF83"
        borderColor={"#018b56"}
        borderWidth={1}
        onPress={() => setShowModal(true)}
        ref={ref}
      >
        <FontAwesomeIcon icon={faPlus} size={13} style={{ color: "white" }} />
      </Button>

      <Modal
        isOpen={showModal}
        size={"lg"}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent bg="#eeeeee">
          <ModalHeader/>

          <ModalBody>
            <View display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={10}>
              {data.map((item: diamondInterface, index: number) => (
                <DiamondCard key={index} item={item} />
              ))}
            </View>
          </ModalBody>

          <ModalFooter display='flex' justifyContent="center" gap={5}>
            <Button
              // variant="outline"
              size="md"
              action="negative"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText fontWeight={'$bold'}>Cancel</ButtonText>
            </Button>

            <Button
              size="md"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText fontWeight={'$bold'}>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default DiamondModal;
