import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Image
          src={
            "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/sign/sourceimage/Asset%202.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb3VyY2VpbWFnZS9Bc3NldCAyLnBuZyIsImlhdCI6MTY3NjMwMDAxNiwiZXhwIjoxNzA3ODM2MDE2fQ.KpEbCCi7wY8Y6DpuwN6VP-AQG-bSgkQfsineeClBD04&t=2023-02-13T14%3A53%3A37.512Z"
          }
          alt={"Logo"}
          height={10}
          width={120}
        />
      </div>
      <div>
        <div className="flex-none">
          <Button colorScheme="blue" variant="ghost">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
