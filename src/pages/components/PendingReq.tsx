import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightAddon, Button } from "@chakra-ui/react";
import Image from "next/image";
import { type } from "os";
import React, { useEffect, useState } from "react";
import ReqCard from "./ReqCard";
import ReqDialogue from "./ReqDialogue";
import { supabase } from "lib/supabaseClient";
import ReqCardM from "./ReqCardM";

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

export default function PendingReq({ id }: Profile) {
  const [data, setData] = useState<Request[]>([]);
  const [offer, setOffer] = useState<any | null>([]);

  useEffect(() => {
    const getOffers = async () => {
      let { data: requests, error } = await supabase
        .from("offer")
        .select("*")
        .eq("uid", id)
        .like('status', 'pending')

      if (requests) {
        console.log(requests);
        setOffer(requests);
      }
      if (error) {
        console.log(id);
        console.log(error);
      }
    };
    getOffers();
  }, [id]);

  const getRequests = () => {
    offer.map(async (offer: { rid: any }) => {
      let { data: requests, error } = await supabase
        .from("requests")
        .select("*")
        .in("id", [offer.rid]);

      if (requests) {
        console.log(requests);
        setData(requests);
      }

      if (error) {
        console.log(offer.rid);
        console.log(error);
      }
    });
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-6 divide-y divide-gray-200 rounded-lg  mt-14">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-5 items-center">
              <div className=" text-lg">Pending Requests</div>
              <Image
                src={
                  "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/routine.png"
                }
                alt={""}
                height={60}
                width={60}
              />
            </div>
            <Button
              onClick={getRequests}
              bg={"#23A6F0"}
              textColor={"white"}
              _hover={{ bg: "blue.400" }}
              variant="solid"
            >
              Load request
            </Button>
          </div>
          <div className="grid grid-cols-1 grid-rows-1">
            {data.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <ReqCardM
                date={data.date}
                uid={data.uid}
                rnumber={data.id}
                name={data.name}
                type={data.type}
                uni={data.uni}
                amount={data.amount}
                interest={data.interest}
                status={offer.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
