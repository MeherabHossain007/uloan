import Layout from "./layout/Layout";
import NavBar from "./layout/NavBar";
import Image from "next/image";
import Testimonials from "./components/Testimonials";

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
              <p className="font-black text-[43px] text-center uppercase">
                Features & Benefits of Loans
              </p>
              <p className="text-center text-lg mt-2 text-gray-500">
                Here is an exhaustive list of all the fees and charges to be{" "}
                <br /> paid for the education loan.
              </p>
              <div className="mt-20 flex justify-center">
                <div className="flex gap-20">
                  {/* 1 */}
                  <div className="bg-base-100 shadow-2xl shadow-gray-200 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
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
                  <div className="bg-base-100 shadow-2xl shadow-gray-200 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
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
                  <div className="bg-base-100 shadow-2xl shadow-gray-200 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
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
                  <div className="bg-base-100 shadow-2xl shadow-gray-200 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
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
                  <div className="bg-base-100 shadow-2xl shadow-gray-200 h-[300px] w-[300px] flex flex-col justify-center items-center gap-2 rounded-xl">
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
                <p className="font-black text-[43px] text-center uppercase">
                  About Education Loan
                </p>
                <p className="text-center text-lg mt-2 text-gray-500">
                  No matter how long the educational path is, ease it with
                  Borrow Education Loan. Borrow Bank <br /> Education Loan
                  provides you with quick and completely transparent loans to
                  fuel your future <br /> aspirations and dreams.
                </p>
              </div>

              <div className="mt-20 flex justify-center">
                <div className="flex gap-16">
                  {/* 1 */}
                  <div className="border-2 h-[280px] w-[350px]  rounded-3xl flex flex-col justify-center px-10 gap-5 bg-gradient-120 from-[#18A6F5] to-[#4D43D6]">
                    <p className="text-3xl text-white font-semibold">
                      Choose Loan <br /> Amount
                    </p>
                    <p className="text-sm text-white font-thin leading-relaxed">
                      First You Choose Loan <br /> Amount
                    </p>
                  </div>

                  {/* 2 */}

                  <div className="border-2 h-[280px] w-[350px]  rounded-3xl flex flex-col justify-center px-10 gap-5 bg-gradient-120 from-[#F89833] to-[#F2614B]">
                    <p className="text-3xl text-white font-semibold">
                      Approved Your <br /> Loan
                    </p>
                    <p className="text-sm text-white font-thin leading-relaxed">
                      Then We Approve Your Loan <br /> After Some Verification
                    </p>
                  </div>

                  {/* 3 */}

                  <div className="border-2 h-[280px] w-[350px]  rounded-3xl flex flex-col justify-center px-10 gap-5 bg-gradient-120 from-[#18A6F5] to-[#4D43D6]">
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
              <p className="font-black text-[43px] text-center uppercase">
                EDUCATION INTEREST RATES & CHARGES
              </p>
              <p className="text-center text-lg mt-2 text-gray-500">
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
                        <p className="text-white font-semibold text-lg">
                          Descripton chargers
                        </p>
                        <p className="text-white font-semibold text-lg">
                          Education Loan
                        </p>
                      </div>
                      <div className="py-3 px-14 flex justify-between ">
                        <p className="text-lg">
                          Loan Processing Charges
                          <span className="text-red-600">*</span>
                        </p>
                        <p className="-mx-5 text-gray-400 text-lg">
                          Maximum up to 1%
                        </p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p className="text-lg">
                          Prepayment charges
                          <span className="text-red-600">*</span>
                        </p>
                        <p className="mx-10 text-gray-400 text-lg">Nil</p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p className="text-lg">No Due Certificate</p>
                        <p className="mx-10 text-gray-400">Nil</p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p className="text-lg">Solvency Certificate</p>
                        <p className="mx-10 text-gray-400">Nil</p>
                      </div>
                      <div className="py-3 px-14 flex justify-between">
                        <p className="text-lg">
                          Penalty Interest on delayed / overdue EMI
                        </p>
                        <p className="-mx-10 text-gray-400 text-lg">
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
              <p className="font-black text-[43px] text-center uppercase">
                SOME OF OUR AWESOME TESTIMONIALS
              </p>
              <p className="text-center text-lg mt-2 text-gray-500">
                Discover the impact we&apos;ve had on others lives. Real
                experiences from real people Who <br /> trust us. Read about the
                results others have achieved with us
              </p>
              <Testimonials />
            </div>

            {/* Just take  minutes for your loan */}

            <div className="mt-32">
              <p className="font-black text-[43px] text-center uppercase">
                Just take minutes for your loan
              </p>
              <p className="text-center text-lg mt-2 text-gray-500">
                Fill up the form below and loan executive would get in touch
                with you
              </p>
            </div>

            {/* Get In Touch */}

            <div className="mt-32">
              <div className="border h-48 bg-gradient-to-r from-[#18A6F5] to-[#4D43D6] flex flex-row justify-center items-center space-x-96 my-10">
                {/* 1 */}
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">Get In Touch</p>
                  <p className="text-xs text-white">
                    Get instant support and solutions with our live chat.
                    Connect with us now!
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <Image
                    src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2013.png"
                    alt="/"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className="mt-32">
              <footer className="w-full text-slate-400">
                {/*      <!-- Main footer --> */}
                <div className="pt-16 pb-12 text-sm  bg-white">
                  <div className="container  mx-24">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                      <nav
                        className="col-span-2 md:col-span-4 lg:col-span-3"
                        aria-labelledby="footer-product-dark"
                      >
                        

                        <Image
                          src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%202.png"
                          alt="logo"
                          width={139}
                          height={48}
                        />

                        <ul className="mt-5">
                          <li className="mb-2 leading-6">
                            <p >
                              the quick fox jumps over the <br /> lazy dog
                            </p>
                          </li>
                        </ul>

                        <div className="flex gap-3 mt-4">
                          {/* 1 */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-facebook text-blue-600"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>

                          {/* 2 */}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-instagram text-red-500"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg>

                          {/* 3 */}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-twitter text-sky-500"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </div>
                      </nav>
                      <nav
                        className="col-span-2 md:col-span-4 lg:col-span-3"
                        aria-labelledby="footer-docs-dark"
                      >
                        <h3
                          className="mb-6 text-base  text-black font-semibold"
                          id="footer-docs-dark"
                        >
                          Company info
                        </h3>
                        <ul>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              About Us
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                             Carrier
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              We are hiring
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              Blog
                            </a>
                          </li>
                          
                        </ul>
                      </nav>
                      <nav
                        className="col-span-2 md:col-span-4 lg:col-span-3"
                        aria-labelledby="footer-about-dark"
                      >
                        <h3
                          className="mb-6 text-base font-semibold text-black"
                          id="footer-about-dark"
                        >
                          Features
                        </h3>
                        <ul>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              Business Marketing
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              User Analytic
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              Live Chat
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                             Unlimited Support
                            </a>
                          </li>
                          
                        </ul>
                      </nav>
                      <nav
                        className="col-span-2 md:col-span-4 lg:col-span-3"
                        aria-labelledby="footer-get-in-touch-dark"
                      >
                        <h3
                          className="mb-6 text-base font-semibold text-black"
                          id="footer-get-in-touch-dark"
                        >
                          Get in touch
                        </h3>
                        <ul>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              IOS & Android
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              Watch a Demo
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              Customers
                            </a>
                          </li>
                          <li className="mb-2 leading-6">
                            <a
                              href="javascript:void(0)"
                              className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                            >
                              API
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/*      <!-- Sub Footer --> */}
                <div className="py-6   bg-[#FAFAFA]">
                  <p className="text-center text-black text-sm font-thin">Made With Love By Midnight Coders All Right Reserved </p>
                </div>
              </footer>
            </div>
          </div>
          <div>
            <script
              src="//code.tidio.co/xm0umtoxjpxqm8yuk9w9hlwypijcj8nz.js"
              async
            ></script>
          </div>
        </section>
      </main>
    </Layout>
  );
}
