"use client";

import { useId } from "react";
import Input from "../components/Input";
import SubmitButton from "../admin/components/SubmitButton";

const Form = () => {
  const id = useId();
  return (
    <form
      className="flex flex-col gap-6 md:gap-8"
      action="https://toolight.pl/api/frontend/pl/contact"
    >
      <div className="flex flex-col gap-4">
        <label
          className="font-semibold text-toolight-secondary"
          htmlFor={`${id}-fullname`}
        >
          Imię i nazwisko
        </label>
        <Input id={`${id}-fullname`} type="text" name="fullname" />
      </div>
      <div className="grid grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-4">
          <label
            className="font-semibold text-toolight-secondary"
            htmlFor={`${id}-email`}
          >
            Email
          </label>
          <Input id={`${id}-email`} type="email" name="email" />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="font-semibold text-toolight-secondary"
            htmlFor={`${id}-telephone`}
          >
            Telefon
          </label>
          <Input id={`${id}-telephone`} type="text" name="telephone" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label
          className="font-semibold text-toolight-secondary"
          htmlFor={`${id}-subject`}
        >
          Temat
        </label>
        <Input id={`${id}-subject`} type="text" name="subject" />
      </div>
      <div className="flex flex-col gap-4">
        <label
          className="font-semibold text-toolight-secondary"
          htmlFor={`${id}-body`}
        >
          Treść
        </label>
        <Input id={`${id}-body`} type="textarea" name="body" />
      </div>
      <input type="hidden" name="isPrivacyPoliticsCheckbox" value={true} />
      <div className="flex flex-col items-end w-full md:w-auto">
        <SubmitButton text={"Wyślij wiadomość"} />
      </div>
    </form>
  );
};

export default Form;
