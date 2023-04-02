import Image from "next/image";

type NavProps = {
  name: string;
  children: React.ReactNode;
};
export default function DashNav({ name ,children }: NavProps) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
              <Image
                src={
                  "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/sign/sourceimage/Asset%202.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb3VyY2VpbWFnZS9Bc3NldCAyLnBuZyIsImlhdCI6MTY3NjMwMDAxNiwiZXhwIjoxNzA3ODM2MDE2fQ.KpEbCCi7wY8Y6DpuwN6VP-AQG-bSgkQfsineeClBD04&t=2023-02-13T14%3A53%3A37.512Z"
                }
                alt={"Logo"}
                height={10}
                width={120}
              />
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3 space-x-4">
              <div className="mx-2 font-semibold">
                Hi, <span className="font-bold">{name}!</span>{" "}
              </div>
              <button type="button" className="flex rounded-full ">
                <Image
                  className="rounded-full"
                  src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/user.png"
                  height={30}
                  width={30}
                  alt="user"
                />
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
