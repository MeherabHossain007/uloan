import { HStack } from "@chakra-ui/react";
import { supabase } from "lib/supabaseClient";
import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import Image from "next/image";
import { useRouter } from "next/router";
import { type } from "os";

type User = {
  id?: string;
  email?: string;
  user_metadata?: {
    name?: string;
    phone?: string;
    nid?: string;
    uni?: string;
    type?: string;
    uid?: string;
  };
};

function Auth() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nid: "",
    uni: "",
    uid: "",
    type: "",
    password: "",
  });

  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  useEffect(() => {
    users.map(async (user) => {
      const { error: userError } = await supabase.from("users").insert([
        {
          id: user.id,
          email: user.email,
          name: user.user_metadata?.name,
          phone: user.user_metadata?.phone,
          nid: user.user_metadata?.nid,
          uni: user.user_metadata?.uni,
          type: user.user_metadata?.type,
          uid: user.user_metadata?.uid,
        },
      ]);
      if (userError) {
        console.log(userError);
      }
    });
  }, [users]);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { email, password } = formData;

    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data.session != null) {
      router.push("/dashboard");
    }
    if (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (event: any) => {
    event.preventDefault();

    const { name, email, password, phone, nid, uni, uid, type } = formData;

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
          phone: phone,
          nid: nid,
          uni: uni,
          uid: uid,
          type: type,
        },
      },
    });
    if (data) {
      console.log(data.user);
      const newUser: User = {
        id: data.user?.id,
        email: data.user?.email,
        user_metadata: data.user?.user_metadata,
      };
      setUsers((prevState) => [...prevState, newUser]);
      setFormStep(0);
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center">
        <Image
          src={
            "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%2056.png"
          }
          alt={""}
          height={400}
          width={500}
          className="self-center justify-self-center"
        />
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg border md:mt-0 sm:max-w-md xl:p-0 border-gray-200">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {formStep == 0 && (
                  <>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      action="#"
                      method="POST"
                      onSubmit={handleLogin}
                    >
                      <TextInput
                        label="Email"
                        name="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        required={true}
                        onChange={handleChange}
                      />
                      <TextInput
                        label="Password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        required={true}
                        onChange={handleChange}
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="text-gray-500 dark:text-gray-300">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Sign in
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <a
                          onClick={nextFormStep}
                          href="#"
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Sign up
                        </a>
                      </p>
                    </form>
                  </>
                )}
                {formStep == 1 && (
                  <>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign up as Member
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      action="#"
                      method="POST"
                      onSubmit={nextFormStep}
                    >
                      <HStack>
                        <TextInput
                          label="Name"
                          name="name"
                          placeholder="Meherab Hossain"
                          value={formData.name}
                          required={true}
                          onChange={handleChange}
                        />
                        <TextInput
                          label="Email"
                          name="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          required={true}
                          onChange={handleChange}
                        />
                      </HStack>
                      <TextInput
                        label="Password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        type='password'
                        required={true}
                        onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Next
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Have an account already?{" "}
                        <a
                          onClick={prevFormStep}
                          href="#"
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Sign in
                        </a>
                      </p>
                    </form>
                  </>
                )}
                {formStep == 2 && (
                  <>
                    <div className="flex justify-between">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign up as a Member
                      </h1>
                      {formStep == 2 && (
                        <button
                          onClick={prevFormStep}
                          type="button"
                          className="rounded-md bg-slate-400 bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          Back
                        </button>
                      )}
                    </div>
                    <form
                      className="space-y-4 md:space-y-6"
                      action="#"
                      method="POST"
                      onSubmit={handleSignUp}
                    >
                      <HStack>
                        <TextInput
                          label="Phone"
                          name="phone"
                          placeholder="017XXXXXX"
                          value={formData.phone}
                          required={true}
                          onChange={handleChange}
                        />
                        <TextInput
                          label="NID"
                          name="nid"
                          placeholder="281XXXXXXX"
                          value={formData.nid}
                          required={true}
                          onChange={handleChange}
                        />
                      </HStack>
                      <HStack w={'full'}>
                        <TextInput
                          label="University Id"
                          name="uid"
                          placeholder="11193XXXX"
                          value={formData.uid}
                          required={true}
                          onChange={handleChange}
                        />
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Type
                          </label>
                          <select
                            onChange={handleChange}
                            id="type"
                            name="type"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose your type</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                          </select>
                        </div>
                      </HStack>
                      <TextInput
                        label="University"
                        name="uni"
                        placeholder="United International University"
                        value={formData.uni}
                        required={true}
                        onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Sign Up
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Auth;
