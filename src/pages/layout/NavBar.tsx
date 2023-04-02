import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter()
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
        <div className="flex-none space-x-5">
          <Button textColor={"#23A6F0"} colorScheme="blue" variant="ghost" onClick={(e) =>{
            e.preventDefault();
            router.push('/auth/auth')
          }}>
            Login
          </Button>
          <Button bg={"#23A6F0"} textColor={"white"} _hover={{bg:'blue.400'}}variant="solid">
            Become a Member
          </Button>
        </div>
      </div>
    </div>
  );
}
