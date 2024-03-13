import { faEdit } from "@fortawesome/free-solid-svg-icons";
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
import React, { useState, useEffect } from "react";
import { diamondInterface } from "../../interfaces/diamondInterface";
import datas from "../../mocks/diamond.json";
import ChangeAvatarCard from "./ChangeAvatarCard";


function ChangeAvatarModal() {
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
        bg="#48B8E9"
        size={"sm"}
        width={15}
        height={36}
        marginRight={-90}
        marginTop={-40}
        borderWidth={2}
        borderColor="$white"
        borderRadius={100}
        onPress={() => setShowModal(true)}
        ref={ref}
      >
        <FontAwesomeIcon
          icon={faEdit}
          size={14}
          style={{ color: "white", margin: "auto" }}
        />
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
                <ChangeAvatarCard key={index} item={item} />
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

export default ChangeAvatarModal;
