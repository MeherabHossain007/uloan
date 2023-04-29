import React from "react";
import ProCard from "./ProCard";
import Card from "./Card";
import { type } from "os";

type Profile = {
  name: string;
  type: string;
  uni: string;
  mobile: string;
  email: string;
}

type Request = {
  id: string;
  uid: string;
  amount: string;
  interest: string;
  date: string;
}

export default function DashHome({name,type,uni,mobile,email}:Profile) {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-6">
          <div className=" col-span-2">
            <Card
              title={"My Loan"}
              balance={"Meherab Hossain"}
              image={""}
              flag={0}
              card={1}
              type={"Student"}
              uni={"United International University"}
            />
          </div>
          <div className=" col-span-2 row-span-2">
            <Card
              title={"My Given Loan"}
              balance={"Meherab Hossain"}
              image={""}
              flag={0}
              card={2}
              type={"Student"}
              uni={"United International University"}
            />
          </div>
          <div className=" col-span-2">
            <Card
              title={"Due Date"}
              balance={"March 28"}
              image={""}
              flag={0}
              card={3}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card
            title={"Your Savings Balance"}
            balance={"15000"}
            fdi={"1"}
            flag={0}
            card={0}
            image={
              "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/stopwatch.png"
            }
          />
          <Card
            title={"Your Loan Balance"}
            balance={"20000"}
            loan={"6"}
            flag={1}
            card={0}
            image={
              "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2067.png"
            }
          />
          <Card
            title={"Current Interest Rate"}
            balance={"12"}
            image={
              "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/debt.png"
            }
            card={0}
            flag={2}
            interestRate={"Fixed"}
          />
          <div className=" col-span-2">
            <ProCard
              title={"Your Profile"}
              name={name}
              type={type}
              mobile={mobile}
              email={email}
              uni={uni}
              genders="male"
            />
          </div>
          <iframe
            width="500"
            height="300"
            frameBorder="0"
            scrolling="no"
            src="https://dayspedia.com/if/digit/?v=1&iframe=eyJ3LTEyIjp0cnVlLCJ3LTExIjp0cnVlLCJ3LTEzIjp0cnVlLCJ3LTE0IjpmYWxzZSwidy0xNSI6ZmFsc2UsInctMTEwIjpmYWxzZSwidy13aWR0aC0wIjpmYWxzZSwidy13aWR0aC0xIjp0cnVlLCJ3LXdpZHRoLTIiOmZhbHNlLCJ3LTE2IjoiMjRweCIsInctMTkiOiI0OCIsInctMTciOiIxNiIsInctMjEiOnRydWUsImJnaW1hZ2UiOjAsImJnaW1hZ2VTZXQiOnRydWUsInctMjFjMCI6IiNmZmZmZmYiLCJ3LTAiOnRydWUsInctMyI6ZmFsc2UsInctM2MwIjoiIzM0MzQzNCIsInctM2IwIjoiMSIsInctNiI6IiMzNDM0MzQiLCJ3LTIwIjp0cnVlLCJ3LTQiOiIjMDAwMDAwIiwidy0xOCI6ZmFsc2UsInctd2lkdGgtMmMtMCI6IjUwMCIsInctMTE1IjpmYWxzZX0=&lang=en&cityid=9611"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
