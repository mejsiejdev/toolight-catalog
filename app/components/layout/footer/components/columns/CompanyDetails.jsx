import "./styles/company.scss";
import { FiHome } from "react-icons/fi";

const CompanyDetails = () => {
  return (
    <div className="footer__details footer-column">
      <h5 className="footer-heading">Dane firmy</h5>
      <div className="company-details">
        <p className="footer__paragraph">Podlasiak Andrzej Cylwik sp. k.</p>
        <p className="footer__paragraph">ul.Przędzalniana 60</p>
        <p className="footer__paragraph">15-688 Białystok</p>
        <p className="footer__paragraph">NIP 966-216-01-21</p>
      </div>
    </div>
  );
};

export default CompanyDetails;
