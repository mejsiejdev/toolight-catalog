"use client";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { checkData } from "./actions";
import Image from "next/image";
import Logo from "@/public/assets/toolight.svg";
import { MdArrowBack, MdArrowLeft, MdRefresh } from "react-icons/md";
import Link from "next/link";

import Input from "@/app/components/Input";

const Signin = () => {
  const router = useRouter();
  const [error, setError] = useState();
  const handleSubmit = async (data) => {
    const result = await checkData(data);
    if (!result[0]) {
      setError(result[1]);
      return;
    }
    router.push("/admin");
  };
  return (
    <div className="flex flex-col max-w-md w-full gap-4">
      <Image src={Logo} alt="Toolight" className="w-52" priority />
      <p className="text-toolight-tertiary">
        Wpisz swój email i hasło, żeby się zalogować.
      </p>
      <form className="flex flex-col gap-4" action={handleSubmit}>
        <Input type="email" name="email" required placeholder="Email" />
        <Input type="password" name="password" required placeholder="Hasło" />
        {error && <p className="text-toolight-danger text-sm">{error}</p>}
        <Button />
      </form>
      <Link href="/">
        <div className="w-full flex flex-row justify-center gap-2 items-center text-toolight-secondary hover:text-toolight-secondary/75 transition">
          <MdArrowBack className="text-xl" />
          <p>Powrót do strony głównej</p>
        </div>
      </Link>
    </div>
  );
};

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-toolight-primary hover:bg-toolight-primary-hover-dark transition p-2 cursor-pointer flex flex-col items-center rounded font-semibold"
    >
      {!pending ? "Kontynuuj" : <MdRefresh className="animate-spin text-xl" />}
    </button>
  );
};

export default Signin;
