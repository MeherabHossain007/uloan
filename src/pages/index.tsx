import { Inter } from "@next/font/google";
import Layout from "./layout/Layout";
import NavBar from "./layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className="md:container md:mx-auto">
        <section className=" text-black">
          <NavBar />

          <div>
            {/* hero section */}

            <div className="mt-20 flex flex-row justify-between ">
              <div>
                <p className="text-5xl font-bold leading-tight">
                  Connect, Borrow, <br /> Succeed with Student- <br />{" "}
                  to-Student Loans.
                </p>

                <p className="mt-8">
                  Unlock the Power of Peer-to-Peer Lending with Student Loans{" "}
                  <br /> from Students, for Students
                </p>

                <div className="mt-8 flex items-center gap-5">
                  <button className="bg-orange-400 px-11 py-3 rounded-full">
                    {" "}
                    <p className="text-white">Get started</p>
                  </button>

                  <p className="underline text-black">Learn more</p>
                </div>
              </div>

              <div>
                <img
                  src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%206.png"
                  alt="image1"
                  className="w-[495px] h-[372px]"
                />
              </div>
            </div>

            {/* Features & Benefits of Loans */}

            <div className="mt-32">
              <p className="font-bold text-4xl text-center">
                Features & Benefits of Loans
              </p>
              <p className="text-center text-xs mt-2 text-gray-500">
                Here is an exhaustive list of all the fees and charges to be{" "}
                <br /> paid for the education loan.
              </p>

              <div className="mt-20 flex justify-center">
                <div className="flex gap-20">
                  {/* 1 */}
                  <div className="border-2 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <img
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2011.png"
                      alt="high valuable loans"
                      className="h-[135px] w-[244px]"
                    />

                    <p className="text-xl font-bold">High valuable loans</p>

                    <p className="text-xs text-gray-500 text-center">
                      Max loan up to Rs. 10 lakh for <br /> studies in any
                    </p>
                  </div>

                  {/* 2 */}

                  <div className="border-2 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <img
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%209.png"
                      className="h-[168px] w-[160px]"
                    />

                    <p className="text-xl font-bold">Easy Loan Repayment</p>

                    <p className="text-xs text-gray-500 text-center">
                      Maximum tenure up to 10 years <br /> for loans up to Rs.
                      7.50 lakhs
                    </p>
                  </div>

                  {/* 3 */}

                  <div className="border-2 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <img
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%208.png"
                      className="h-[132px] w-[231px]"
                    />

                    <p className="text-xl font-bold text-center">
                      Attractive Rates of <br /> Interest
                    </p>

                    <p className="text-xs text-gray-500 text-center">
                      Unleash Your Potential with Low-Cost <br /> Loans and
                      Attractive Rates of Interest
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex justify-center">
                <div className="flex gap-20">
                  {/* 4 */}
                  <div className="border-2 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <img
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2010.png"
                      className="h-[161px] w-[138px]"
                    />

                    <p className="text-xl font-bold text-center">
                    Secure your loan
                    </p>

                    <p className="text-xs text-gray-500 text-center">
                    Secure Your Future with <br /> Confidence - Safely and Securely 
                    </p>
                  </div>

                  {/* 5 */}

                  <div className="border-2 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <img
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%207.png"
                      className="h-[154px] w-[170px]"
                    />

                    <p className="text-xl font-bold text-center">
                    Savings container
                    </p>

                    <p className="text-xs text-gray-500 text-center">
                    Secure, convenient saving tool <br /> with deposit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
