import React, { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightAddon, Button } from "@chakra-ui/react";
import Image from "next/image";
import { type } from "os";
import ReqCard from "./ReqCard";
import ReqDialogue from "./ReqDialogue";
import { supabase } from "lib/supabaseClient";

type Profile = {
  id?: string;
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

export default function MyReq({ id }: Profile) {
  const [data, setData] = useState<Request[]>([]);

  useEffect(() => {
    const getRequests = async () => {
      let { data: requests, error } = await supabase
        .from("requests")
        .select("*")
        .eq("uid", id);

      if (requests) {
        console.log(requests);
        setData(requests);
      }

      if (error) {
        console.log(error);
      }
    };
    getRequests();
  }, [id]);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-6 divide-y divide-gray-200 rounded-lg  mt-14">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-7 items-center">
              <div className=" text-lg">Pending Requests</div>
              <Image
                src={
                  "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/money-bag.png"
                }
                alt={""}
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1">
            {data.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <ReqCard
                date={data.date}
                uid={data.uid}
                rnumber={data.id}
                name={data.name}
                type={data.type}
                uni={data.uni}
                amount={data.amount}
                interest={data.interest}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
