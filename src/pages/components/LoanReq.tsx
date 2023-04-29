import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReqCard from "./ReqCard";
import ReqDialogue from "./ReqDialogue";
import { supabase } from "lib/supabaseClient";

type User = {
  id?: string;
  email?: string;
  name?: string;
  uni?: string;
  type?: string;
};

type Request = {
  id?: string;
  uid?: string;
  name?: string;
  uni?: string;
  type?: string;
  amount?: string;
  interest?: string;
  accept?: string;
  date?: string;
};

export default function LoanReq({ id, email, name, uni, type }: User) {
  const [data, setData] = useState<Request[]>([]);

  useEffect(() => {
    const getRequests = async () => {
      let { data: requests, error } = await supabase
        .from("requests")
        .select("*");

      if (requests) {
        setData(requests);
      }
    };
    getRequests();
  }, []);
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-6 divide-y divide-gray-200 rounded-lg  mt-14">
          <div className="flex justify-between items-center mb-6">
            <div className=" text-lg">All Requests</div>
            <div>
              <InputGroup>
                <Input w={500} type="tel" placeholder="Enter Amount" />
                <InputRightAddon>
                  <SearchIcon />
                </InputRightAddon>
              </InputGroup>
            </div>
            <ReqDialogue id={id} name={name} uni={uni} type={type} />
          </div>
          <div className="grid grid-cols-1 grid-rows-1">
            {data.map((data) =>
              // eslint-disable-next-line react/jsx-key
              data.id == id ? (
                <ReqCard
                  key={data.id}
                  flag={"0"}
                  date={data.date}
                  uid={data.uid}
                  rnumber={data.id}
                  name={data.name}
                  type={data.type}
                  uni={data.uni}
                  amount={data.amount}
                  interest={data.interest}
                />
              ) : (
                <ReqCard
                  flag={"1"}
                  key={data.id}
                  date={data.date}
                  uid={data.uid}
                  rnumber={data.id}
                  name={data.name}
                  type={data.type}
                  uni={data.uni}
                  amount={data.amount}
                  interest={data.interest}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
