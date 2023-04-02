import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import ReqCard from "./ReqCard";
import ReqDialogue from "./ReqDialogue";

export default function LoanReq() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-6 divide-y divide-gray-200 rounded-lg  mt-14">
          <div className="flex justify-between items-center mb-6">
            <div className=" text-lg">All Requests</div>
            <div>
              <InputGroup>
                <Input w={500} type="tel" placeholder="Enter Amount" />
                <InputRightAddon children={<SearchIcon />} />
              </InputGroup>
            </div>
            <ReqDialogue />
          </div>
          <div className="grid grid-cols-1 grid-rows-1">
            <ReqCard
              rnumber={"1"}
              name={"Meherab Hossain"}
              type={"Student"}
              uni={"United International University"}
              amount={"5000"}
              interest={"2"}
            />
            <ReqCard
              rnumber={"2"}
              name={"Sadab Uz Zaman"}
              type={"Student"}
              uni={"United International University"}
              amount={"10000"}
              interest={"3"}
            />
            <ReqCard
              rnumber={"3"}
              name={"Md.Yusuf"}
              type={"Student"}
              uni={"United International University"}
              amount={"20000"}
              interest={"4"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
