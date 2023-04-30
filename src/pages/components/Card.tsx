import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import { type } from "os";

type CardProps = {
  id?: string;
  title?: string;
  status?: string;
  name?: string;
  balance?: string;
  fdi?: string;
  image: string;
  loan?: string;
  interestRate?: string;
  flag?: number;
  card?: number;
  type?: string;
  uni?: string;
};

export default function Card({
  id,
  title,
  name,
  status,
  balance,
  fdi,
  image,
  loan,
  interestRate,
  flag,
  card,
  type,
  uni,
}: CardProps) {
  return (
    <div>
      {card == 0 && (
        <div className="border-2 flex w-full h-40 bg-white rounded-3xl justify-between items-center px-6">
          <div className="flex flex-col space-y-1  justify-between h-full py-5">
            <div>
              <div className=" font-bold text-lg">{title}</div>
              {flag == 2 ? (
                <div className=" text-3xl font-light">{balance}%</div>
              ) : (
                <div className=" text-3xl font-light">BDT {balance}</div>
              )}
            </div>
            <div>
              <span className="text-black font-bold text-sm rounded-md bg-slate-200 px-3 py-1 ">
                {flag == 0 && `${fdi} Year Savings`}
                {flag == 1 && `${loan} Month Period`}
                {flag == 2 && `${interestRate} interest`}
              </span>
            </div>
          </div>
          <Image src={image} alt={"Logo"} height={10} width={100} />
        </div>
      )}

      {/* Gradient Cards */}

      {card == 1 && (
        <div className="flex w-full h-full bg-gradient-120 from-[#F89833] to-[#F2614B] rounded-3xl justify-between items-center px-6">
          <div className="flex w-full justify-between h-full py-5">
            <div>
              <HStack spacing={4}>
                <div className=" font-bold text-lg text-white">{title}</div>
                <span className="text-white font-bold text-sm rounded-md bg-white/25 px-3">
                  {status}
                </span>
              </HStack>
              <div className=" text-3xl font-light mt-1 text-white">{name}</div>
              <div className=" font-semibold text-base text-white">{type}</div>
              <div className=" font-semibold text-base text-white">{uni}</div>
            </div>
            <div>
              <div className="flex flex-col justify-between h-full items-end">
                <div className="font-bold text-lg text-white">Total Amount</div>
                <div className="text-3xl">
                  <span className="text-white">BDT {balance}</span>
                </div>
                <div className="mb-2">
                  <span className="text-white font-bold text-sm rounded-md bg-white/20 px-3 py-1 ">
                    #ULN0{id}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {card == 2 && (
        <div className="flex w-full h-full bg-gradient-120 from-[#18A6F5] to-[#4D43D6] rounded-3xl justify-between items-center px-6">
            <div className="flex w-full justify-between h-full py-5">
              <div>
                <div className=" font-bold text-lg text-white">{title}</div>
                <div className=" text-3xl mt-2 font-light text-white">{name}</div>
                <div className=" font-semibold text-base text-white">
                  {type}
                </div>
                <div className=" font-semibold text-base text-white">{uni}</div>
              </div>
              <div>
                <div className="flex flex-col justify-between h-full items-end gap-1 ">
                  <div>
                    <span className="font-bold text-lg text-white">
                      Total Amount
                    </span>
                    <div className="text-3xl ">
                      <span className="text-white mt-2">{balance}</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-white font-bold text-sm rounded-md bg-white/20 px-3 py-1 ">
                      #C7456YU
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )}
      {card == 3 && (
        <div className="flex w-full h-full bg-gradient-120 from-[#7f18f5] to-[#d62ef8] rounded-3xl justify-between items-center px-6">
          <div className="flex w-full justify-between h-full py-5">
            <div>
              <div className=" font-bold text-lg text-white">{title}</div>
              <div className=" text-3xl font-light text-white">{balance}</div>
            </div>
            <div>
              <div className="flex flex-col justify-between h-full items-end gap-1 ">
                <div>
                  <span className="font-bold text-lg text-white">
                    Due Amount
                  </span>
                  <div className="text-3xl ">
                    <span className="text-white">$5,000</span>
                  </div>
                </div>
                <div className="mb-2 mt-3">
                  <span className="text-white font-bold text-sm rounded-md bg-white/20 px-3 py-1 ">
                    #C7456YU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
