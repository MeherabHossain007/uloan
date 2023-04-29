import { type } from "os";
import React from "react";
import OfferDialogue from "./OfferDialogue";
import { Button, HStack } from "@chakra-ui/react";

type ReqCardProps = {
  uid?: string;
  rnumber?: number;
  name?: string;
  type?: string;
  uni?: string;
  amount?: string;
  interest?: string;
};

export default function ReqCard({
  uid,
  rnumber,
  name,
  type,
  uni,
  amount,
  interest,
}: ReqCardProps) {
  return (
    <div className="border-2 flex w-full h-36 bg-white rounded-3xl justify-between items-center px-6 mt-6">
      <div className="flex w-full justify-between py-5">
        <div className="flex flex-col h-full ">
          <div className=" flex space-x-1">
            <div className=" font-bold text-lg">Request No.</div>
            <div className=" text-lg font-light">{rnumber}</div>
          </div>
          <div className=" text-2xl font-light">{name}</div>
          <div className=" font-semibold text-base text-slate-500">{type}</div>
          <div className=" font-semibold text-base text-slate-500">{uni}</div>
        </div>
        <div className="flex flex-col justify-between h-full items-end">
          <span className="font-bold text-lg ">Request Amount</span>
          <div className="flex space-x-2 items-center justify-center">
            <div className="text-2xl ">BDT {amount}</div>
            <div className=" flex font-bold text-sm items-center justify-center rounded-md bg-slate-200 h-6 w-14 p-1">
              0 - {interest}%
            </div>
          </div>
          <div className="mt-4">
            <HStack>
              <OfferDialogue id={rnumber} uid={uid} />{" "}
              <Button
                bg={"#23A6F0"}
                size={"sm"}
                textColor={"white"}
                _hover={{ bg: "blue.400" }}
                variant="solid"
              >
                Accept Without Interest
              </Button>
            </HStack>
          </div>
        </div>
      </div>
    </div>
  );
}
