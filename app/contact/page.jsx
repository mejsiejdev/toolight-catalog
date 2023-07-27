"use client";
import { useId } from "react";
import Wrapper from "../components/layout/Wrapper";
import Input from "../components/Input";
import SubmitButton from "../admin/components/SubmitButton";

export const metadata = {
  title: "tooLight | Kontakt",
};

const ContactPage = () => {
  const id = useId();
  return (
    <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl">Skontaktuj się z nami</h2>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-2xl">Infolinia</h3>
            <p className="text-toolight-secondary">
              Czynna od poniedziałku do piątku w godzinach 7.00 - 19.00.
            </p>
          </div>
          <p className="text-toolight-primary font-semibold text-lg">
            (+48) 857 337 777
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-2xl">Obsługa klienta</h3>
          </div>
          <a
            href="mailto:biuro@toolight.pl"
            className="text-toolight-primary hover:text-toolight-primary-hover-dark hover:underline transition text-lg font-semibold"
          >
            biuro@toolight.pl
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-2xl">Dział reklamacji</h3>
          </div>
          <a
            href="mailto:reklamacje@toolight.pl"
            className="text-toolight-primary hover:text-toolight-primary-hover-dark hover:underline transition text-lg font-semibold"
          >
            reklamacje@toolight.pl
          </a>
        </div>
      </div>
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
    </Wrapper>
  );
};

export default ContactPage;
