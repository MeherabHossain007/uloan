import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import email from "next-auth/providers/email";
import image from "next/image";
import { type } from "os";
import React from "react";
import TextInput from "./TextInput";

export default function ReqDialogue() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg={"#23A6F0"}
        textColor={"white"}
        _hover={{ bg: "blue.400" }}
        variant="solid"
      >
        Make request
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Submit Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput onChange={() => {}} value={""} label={"Request Amount"} />
            <TextInput onChange={() => {}} value={""} label={"Interest Rate"} />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} variant="ghost">
              Close
            </Button>
            <Button
              bg={"#23A6F0"}
              textColor={"white"}
              _hover={{ bg: "blue.400" }}
              variant="solid"
              onClick={(e) => {}}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
