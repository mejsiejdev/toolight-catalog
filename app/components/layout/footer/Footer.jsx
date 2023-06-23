import "./styles/footer.scss";
import Wrapper from "@/app/components/layout/Wrapper";
import CompanyContact from "@/app/components/layout/footer/components/columns/CompanyContact";
import CompanyDetails from "@/app/components/layout/footer/components/columns/CompanyDetails";
import CompanyDescription from "@/app/components/layout/footer/components/columns/CompanyDescription";

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <section className="footer-content">
          <CompanyDescription />
          <CompanyDetails />
          <CompanyContact />
        </section>
        <small>© Toolight.pl - Wszystkie prawa zastrzezone.</small>
      </Wrapper>
    </footer>
  );
};

export default Footer;
