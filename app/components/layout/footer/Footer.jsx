import "./styles/footer.scss";
import Wrapper from "@/app/components/layout/Wrapper";
import CompanyContact from "@/app/components/layout/footer/components/columns/CompanyContact";
import CompanyDetails from "@/app/components/layout/footer/components/columns/CompanyDetails";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <section className="footer-content">
          <Image
            className="company-logo"
            src="/assets/logo.png"
            width={250}
            height={100}
            alt="Logo Toolight"
          />
          <CompanyDetails />
          <CompanyContact />
        </section>
        <small className="text-toolight-secondary">
          © Toolight.pl - Wszystkie prawa zastrzeżone.
        </small>
      </Wrapper>
    </footer>
  );
};

export default Footer;
