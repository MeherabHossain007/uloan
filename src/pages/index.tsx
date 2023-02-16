import Layout from "./layout/Layout";
import NavBar from "./layout/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="md:container md:mx-auto font-titillium px-12">
        <section className=" text-black justify-center">
          <NavBar />
          {/* Hero Section */}
          <div>
            <div className="mt-20 flex flex-row justify-between content-center">
              <div>
                <p className="text-5xl font-black leading-tight">
                  Connect, Borrow, <br /> Succeed with Student- <br />{" "}
                  to-Student Loans.
                </p>
                <p className="mt-8">
                  Unlock the Power of Peer-to-Peer Lending with Student Loans{" "}
                  <br /> from Students, for Students
                </p>
                <div className="mt-8 flex items-center gap-5">
                  <button className="bg-orange-400 px-11 py-3 rounded-full">
                    <p className="text-white">Get started</p>
                  </button>
                  <p className="underline text-black">Learn more</p>
                </div>
              </div>
              <div>
                <Image
                  src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%206.png"
                  alt="image1"
                  height={400}
                  width={500}
                  className="w-[495px] h-[372px]"
                />
              </div>
            </div>
            {/* Features & Benefits of Loans */}
            <div className="mt-32 flex flex-col justify-center">
              <p className="font-black text-5xl text-center uppercase">
                Features & Benefits of Loans
              </p>
              <p className="text-center text-lg mt-2 text-gray-500">
                Here is an exhaustive list of all the fees and charges to be{" "}
                <br /> paid for the education loan.
              </p>
              <div className="mt-20 flex justify-center">
                <div className="flex gap-20">
                  {/* 1 */}
                  <div className="bg-base-100 shadow-xl h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <Image
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2011.png"
                      alt="high valuable loans"
                      height={400}
                      width={500}
                      className="h-[135px] w-[244px]"
                    />
                    <p className="text-xl font-bold">High valuable loans</p>
                    <p className="text-xs text-gray-500 text-center">
                      Max loan up to Rs. 10 lakh for <br /> studies in any
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="bg-base-100 shadow-xl h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <Image
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%209.png"
                      className="h-[168px] w-[160px]"
                      alt={"icon 2"}
                      height={400}
                      width={500}
                    />
                    <p className="text-xl font-bold">Easy Loan Repayment</p>

                    <p className="text-xs text-gray-500 text-center">
                      Maximum tenure up to 10 years <br /> for loans up to Rs.
                      7.50 lakhs
                    </p>
                  </div>
                  {/* 3 */}
                  <div className="bg-base-100 shadow-xl h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <Image
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%208.png"
                      className="h-[132px] w-[231px]"
                      alt={"Icon 2"}
                      height={400}
                      width={500}
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
                  <div className="bg-base-100 shadow-xl h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <Image
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2010.png"
                      className="h-[161px] w-[138px]"
                      alt={"icon 4"}
                      height={400}
                      width={500}
                    />
                    <p className="text-xl font-bold text-center">
                      Secure your loan
                    </p>
                    <p className="text-xs text-gray-500 text-center">
                      Secure Your Future with <br /> Confidence - Safely and
                      Securely
                    </p>
                  </div>
                  {/* 5 */}
                  <div className="bg-base-100 shadow-xl h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
                    <Image
                      src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%207.png"
                      className="h-[154px] w-[170px]"
                      alt={"image 5"}
                      height={400}
                      width={500}
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

            {/* about education loan */}

<div className="mt-32">
              <div className="">
                <p className="font-bold text-4xl text-center uppercase">
                  About Education Loan
                </p>
                <p className="text-center text-xs mt-2 text-gray-400">
                  No matter how long the educational path is, ease it with
                  Borrow Education Loan. Borrow Bank <br /> Education Loan
                  provides you with quick and completely transparent loans to
                  fuel your future <br /> aspirations and dreams.
                </p>
              </div>

              <div className="mt-20 flex justify-center">
                <div className="flex gap-16">
                  {/* 1 */}
                  <div className="border-2 h-[280px] w-[350px]  rounded-3xl flex flex-col justify-center px-10 gap-5 bg-gradient-to-r from-blue-600 to-blue-700">
                    <p className="text-3xl text-white font-semibold">
                      Choose Loan <br /> Amount
                    </p>
                    <p className="text-sm text-white font-thin leading-relaxed">
                      First You Choose Loan <br /> Amount
                    </p>
                  </div>

                  {/* 2 */}

                  <div className="border-2 h-[280px] w-[350px]  rounded-3xl flex flex-col justify-center px-10 gap-5 bg-gradient-to-r from-orange-400 to-orange-500">
                    <p className="text-3xl text-white font-semibold">
                      Approved Your <br /> Loan
                    </p>
                    <p className="text-sm text-white font-thin leading-relaxed">
                      Then We Approve Your Loan <br /> After Some Verification
                    </p>
                  </div>

                  {/* 3 */}

                  <div className="border-2 h-[280px] w-[350px]  rounded-3xl flex flex-col justify-center px-10 gap-5 bg-gradient-to-r from-blue-600 to-blue-700">
                    <p className="text-3xl text-white font-semibold">
                      Get Your Cash
                    </p>
                    <p className="text-sm text-white font-thin leading-relaxed">
                      After Approval Finally You Will <br /> Get Your Cash
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* rates &  charges */}
            <div className="mt-32  ">
              <p className="font-bold text-4xl text-center">
                EDUCATION INTEREST RATES & CHARGES
              </p>
              <p className="text-center text-xs mt-2 text-gray-400">
                Here is an exhaustive list of all the fees and charges to be
                paid for the education loan.
              </p>

              <div className="mt-20 ">
                <div className="flex flex-row justify-between items-center">
                  <div className="space-y-5">
                    {/* 1 */}
                    <div className="border-2  w-[225px] h-[110px] rounded-3xl flex flex-col justify-center px-10 ">
                      <p className="font-black text-2xl">0.00%</p>
                      <p className="text-gray-400">Min apr</p>
                    </div>

                    {/* 2 */}

                    <div className="border-2  w-[225px] h-[110px] rounded-3xl flex flex-col justify-center px-10 ">
                      <p className="font-black text-2xl">17.75%</p>
                      <p className="text-gray-400">Max apr</p>
                    </div>

                    {/* 3 */}

                    <div className="border-2  w-[225px] h-[110px] rounded-3xl flex flex-col justify-center px-10 ">
                      <p className="font-black text-2xl">12.5%</p>
                      <p className="text-gray-400">Min apr</p>
                    </div>
                  </div>

                  <div>
                    <div className="divide-y w-[900px] border rounded-3xl overflow-x-auto">
                      <div className="py-3 px-14 flex justify-between bg-[#626ADD]">
                        <p className="text-white font-semibold">
                          Descripton chargers
                        </p>
                        <p className="text-white font-semibold">
                          Education Loan
                        </p>
                      </div>
                      <div className="py-3 px-14 flex justify-between ">
                        <p>
                          Loan Processing Charges
                          <span className="text-red-600">*</span>
                        </p>

                        <p className="-mx-5 text-gray-400">Maximum up to 1%</p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p>
                          Prepayment charges
                          <span className="text-red-600">*</span>
                        </p>
                        <p className="mx-10 text-gray-400">Nil</p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p>No Due Certificate</p>
                        <p className="mx-10 text-gray-400">Nil</p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p>Solvency Certificate</p>
                        <p className="mx-10 text-gray-400">Nil</p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p>Penalty Interest on delayed / overdue EMI</p>
                        <p className="-mx-10 text-gray-400">
                          Write here your % of delayed payment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* testimonial */}

            <div className="mt-32">
              <p className="font-bold text-4xl text-center">
                SOME OF OUR AWESOME TESTIMONIALS
              </p>
              <p className="text-center text-xs mt-2 text-gray-400">
                Discover the impact we've had on others' lives. Real experiences
                from real people Who <br /> trust us. Read about the results
                others have achieved with us
              </p>

              <div className="mt-20 flex justify-center gap-16  ">
                {/* 1 */}
                <div className="border-2 w-[300px] h-[300px] space-y-5 flex flex-col justify-center rounded-2xl">
                  <p className="font-mono text-gray-600 text-center">
                    "Slate helps you see how many <br /> more days you need to
                    work to <br />
                    reach your financial goal."
                  </p>

                  <div className="flex items-center gap-3 px-8">
                    <div className="avatar">
                      <div className="w-14  rounded-full ">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic1"

                        
                        
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-[#23A6F0]">Regina Miles</p>
                      <p className="text-xs font-semibold">Student</p>
                    </div>
                  </div>
                </div>

                {/* 2 */}

                <div className="border-2 w-[300px] h-[300px] space-y-5 flex flex-col justify-center rounded-2xl">
                  <p className="font-mono text-gray-600 text-center">
                    "Slate helps you see how many <br /> more days you need to
                    work to <br />
                    reach your financial goal."
                  </p>

                  <div className="flex items-center gap-3 px-8">
                    <div className="avatar">
                      <div className="w-14  rounded-full ">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                      </div>
                    </div>
                    <div>
                      <p className="text-[#23A6F0]">Ian Campbell</p>
                      <p className="text-xs font-semibold">Student</p>
                    </div>
                  </div>
                </div>

                {/* 3 */}

                <div className="border-2 w-[300px] h-[300px] space-y-5 flex flex-col justify-center rounded-2xl">
                  <p className="font-mono text-gray-600 text-center">
                    "Slate helps you see how many <br /> more days you need to
                    work to <br />
                    reach your financial goal."
                  </p>

                  <div className="flex items-center gap-3 px-8">
                    <div className="avatar">
                      <div className="w-14  rounded-full ">
                        <img src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                      </div>
                    </div>
                    <div>
                      <p className="text-[#23A6F0]">James Cameron</p>
                      <p className="text-xs font-semibold">Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Just take  minutes for your loan */}

            <div className="mt-32">
              <p className="font-bold text-4xl text-center uppercase">
              Just take  minutes for your loan
              </p>
              <p className="text-center text-xs mt-2 text-gray-400">
              Fill up the form below and loan executive would get in touch with you
              </p>

              <div className="mt-20">

                <div className="flex flex-col  items-center space-y-10">
                  <div className="space-x-20">
                    <input type="text" placeholder="Name" className="border-2 py-2 px-20 rounded-xl hover:scale-105 "/>

                    <input type="text" placeholder="E-MAIL" className="border-2 py-2 px-20 rounded-xl hover:scale-105 "/>
                    
                  </div>
                  <div className="space-x-20">
                    <input type="text" placeholder="PHONE" className="border-2 py-2 px-20 rounded-xl hover:scale-105 "/>

                    <input type="text" placeholder="LOCATION" className="border-2 py-2 px-20 rounded-xl hover:scale-105 "/>
                    
                  </div>
                  <div className="flex flex-col space-y-5">

                  <input type="text" placeholder="AMOUNT" className="border-2 py-2 px-[295px] rounded-xl hover:scale-105 text-center"/>

                  <button className="text-center bg-[#199DE8] text-white py-2 px-[295px] rounded-lg hover:bg-orange-500">SEND A REQUEST</button>
                  </div>
                </div>

              </div>
            </div>


            {/* Get In Touch */}

            <div className="mt-32">

              <div className="border h-48 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 flex flex-row justify-center items-center space-x-96 my-10">

                {/* 1 */}
                <div className="space-y-2">
                    <p className="text-3xl font-bold text-white">Get In Touch</p>
                    <p className="text-xs text-white">Get instant support and solutions with our live chat. Connect with us now!</p>
                </div>

                {/* 2 */}
                <div>
                    <Image src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2013.png" alt="/" 

                    width={200}
                    height={200}
                    
                    />
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
