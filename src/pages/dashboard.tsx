import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashNav from "./components/DashNav";
import SideBar from "./components/SideBar";
import DashButton from "./components/DashButton";
import DashHome from "./components/DashHome";
import LoanReq from "./components/LoanReq";
import Profile from "./components/Profile";
import PendingReq from "./components/PendingReq";
import MyReq from "./components/MyReq";
import AcceptReq from "./components/AcceptReq";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [email, setEmail] = useState<any | null>(null);
  const [data, setData] = useState<any | null>([]);
  const [active, setActive] = useState(0);

  async function getUsers() {
    const { data, error } = await supabase.auth.getSession();
    setUser(data.session?.user.id);
    setEmail(data.session?.user.email);
    setData(data.session?.user.user_metadata);
    return error;
  }

  useEffect(() => {
    getUsers();
    console.log(user);
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  return (
    <>
      <DashNav name={data.name}>
        <button onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </DashNav>
      <SideBar>
        <DashButton
          name={"Dashboard"}
          onClick={() => {
            setActive(0);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline-block align-middle mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </DashButton>
        <DashButton
          name={"Loan Request"}
          onClick={() => {
            setActive(1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block align-middle mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </DashButton>
        <DashButton
          name={"Deposite Money"}
          onClick={() => {
            setActive(2);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block align-middle mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>
        </DashButton>
        <DashButton
          name={"Profile"}
          onClick={() => {
            setActive(3);
          }}
        >
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/null/user-male-circle.png"
            className="w-6 h-6 inline-block align-middle mr-2"
          />
        </DashButton>
        <DashButton
          name={"My Requests"}
          onClick={() => {
            setActive(4);
          }}
        >
          <img
            src="https://img.icons8.com/dotty/80/null/request-money.png"
            className="w-6 h-6 inline-block align-middle mr-2"
          />
        </DashButton>
        <DashButton
          name={"Pending Requests"}
          onClick={() => {
            setActive(5);
          }}
        >
          <img
            src="https://img.icons8.com/material-outlined/48/null/data-pending.png"
            className="w-6 h-6 inline-block align-middle mr-2"
          />
        </DashButton>
        <DashButton
          name={"Acepted Requests"}
          onClick={() => {
            setActive(6);
          }}
        >
          <img
            src="https://img.icons8.com/windows/32/null/checked--v2.png"
            className="w-6 h-6 inline-block align-middle mr-2"
          />
        </DashButton>
      </SideBar>
      {active == 0 && (
        <DashHome
          id={user}
          name={data.name}
          type={data.type}
          uni={data.uni}
          mobile={data.phone}
          email={email}
        />
      )}
      {active == 1 && (
        <LoanReq
          id={user}
          email={email}
          name={data.name}
          uni={data.uni}
          type={data.type}
        />
      )}
      {active == 3 && (
        <Profile
          title={"Your Profile"}
          name={data.name}
          type={data.type}
          mobile={data.phone}
          email={email}
          uni={data.uni}
          unid={data.uid}
          nid={data.nid}
          genders="male"
        />
      )}
      {active == 4 && <MyReq id={user} />}
      {active == 5 && <PendingReq id={user} />}
      {active == 6 && <AcceptReq id={user} />}
    </>
  );
}
