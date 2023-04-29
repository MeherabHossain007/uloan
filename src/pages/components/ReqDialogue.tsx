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
import TextInput from "./TextInput";
import { supabase } from "lib/supabaseClient";
import { useState } from "react";
import handler from "../api/hello";

type User = {
  id?: string;
  name?: string;
  uni?: string;
  type?: string;
};

export default function ReqDialogue({ id, name, uni, type }: User) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async () => {
    console.log("hello");
    const { data, error } = await supabase.from("requests").insert([
      {
        uid: id,
        name: name,
        uni: uni,
        type: type,
        amount: amount,
        interest: interest,
        accept: "Inactive",
        date: `${date} ${time}`,
      },
    ]);
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };
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
            <TextInput
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
              label={"Request Amount"}
            />
            <TextInput
              onChange={(e) => {
                setInterest(e.target.value);
              }}
              value={interest}
              label={"Maximum Interest Rate"}
            />
            <HStack flex={1}>
              <TextInput
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={interest}
                label={"Loan Period"}
              />
              <div className=" items-center">
                <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  Default select
                </label>
                <select
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  id="default"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Option</option>
                  <option value="Day">Day</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </div>
            </HStack>
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
