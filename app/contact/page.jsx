import Wrapper from "../components/layout/Wrapper";

const ContactPage = () => {
  return (
    <Wrapper className="flex flex-col gap-4 pb-8">
      <h2 className="text-4xl">Kontakt</h2>
      <div className="flex flex-col gap-2">
        <p>
          <strong>Infolinia</strong> <br />
          <span className="text-toolight-primary">(+48) 857 337 777</span>{" "}
          (czynna w godzinach: od poniedziałku do piątku: 7.00 – 19.00 piątek:
          7.00 – 17.00)
        </p>

        <p>
          <strong>Obsługa Klienta</strong>
          <br />
          <a
            href="mailto:biuro@toolight.pl"
            className="text-toolight-primary hover:text-toolight-primary-hover-dark hover:underline transition"
          >
            biuro@toolight.pl
          </a>
        </p>

        <p>
          <strong>Dział Zamówień</strong>
          <br />
          <a
            href="mailto:biuro@toolight.pl"
            className="text-toolight-primary hover:text-toolight-primary-hover-dark hover:underline transition"
          >
            biuro@toolight.pl
          </a>
        </p>

        <p>
          <strong>Dział Techniczny</strong>
          <br />
          <a
            href="mailto:biuro@toolight.pl"
            className="text-toolight-primary hover:text-toolight-primary-hover-dark hover:underline transition"
          >
            biuro@toolight.pl
          </a>
        </p>

        <p>
          <strong>Dział Reklamacji</strong>
          <br />
          <a
            href="mailto:reklamacje@toolight.pl"
            className="text-toolight-primary hover:text-toolight-primary-hover-dark hover:underline transition"
          >
            reklamacje@toolight.pl
          </a>
        </p>

        <p>
          Można również wysłać do nas wiadomość przez{" "}
          <a
            className="text-toolight-primary hover:text-toolight-primary-hover-dark hover:underline transition"
            href="/contact.html"
          >
            <strong>Formularz kontaktowy</strong>
          </a>
          .
        </p>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
