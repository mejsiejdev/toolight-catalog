import Wrapper from "../components/layout/Wrapper";
import Form from "./Form";

export const metadata = {
  title: "Kontakt | tooLight",
};

const ContactPage = () => {
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
          <p className="text-toolight-primary-hover-dark font-semibold text-lg">
            (+48) 857 337 777
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-2xl">Obsługa klienta</h3>
          </div>
          <a
            href="mailto:biuro@toolight.pl"
            className="text-toolight-primary-hover-dark hover:text-toolight-primary-hover-darker hover:underline transition text-lg font-semibold"
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
            className="text-toolight-primary-hover-dark hover:text-toolight-primary-hover-darker hover:underline transition text-lg font-semibold"
          >
            reklamacje@toolight.pl
          </a>
        </div>
      </div>
      <Form />
    </Wrapper>
  );
};

export default ContactPage;
