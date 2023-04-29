import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TextInput from "./TextInput";
import { supabase } from "lib/supabaseClient";

type Offer = {
  id?: string;
  uid?: string;
};
export default function OfferDialogue({ id, uid }: Offer) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [interest, setInterest] = useState("");

  const handleSubmit = async () => {
    console.log(id);
    const { data, error } = await supabase
      .from("offer")
      .insert([{ rid: id, uid: uid, interest: interest, status: "pending" }]);

    const { data: request, error:reqerror } = await supabase
      .from("requests")
      .update({ accept: "Pending" })
      .eq("id", id);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"green.400"}
        size={"sm"}
        textColor={"white"}
        _hover={{ bg: "green.500" }}
        variant="solid"
      >
        Offer Interest
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Make an offer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput
              onChange={(e) => {
                setInterest(e.target.value);
              }}
              value={interest}
              label={"Interest Rate"}
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} variant="ghost">
              Close
            </Button>
            <Button
              bg={"green.400"}
              textColor={"white"}
              _hover={{ bg: "green.500" }}
              variant="solid"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
