import "./styles/company.scss";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const CompanyContact = () => {
  return (
    <div className="footer__contact footer-column">
      <h5 className="footer-heading">Kontakt</h5>
      <div className="contact-details">
        <div className="contact-details__text">
          <span className="contact-details__line">
            <FiPhone className="footer__icon" size={20} />
            <Link
              href="tel:+48857337777"
              className="footer__paragraph footer__link"
            >
              +48 857 337 777
            </Link>
          </span>
          <span className="contact-details__line">
            <FiMail className="footer__icon" size={20} />
            <Link
              href="mailto:krzysztof.tomaszewski@rea.pl"
              className="footer__paragraph footer__link"
            >
              biuro@toolight.pl
            </Link>
          </span>
          <span className="contact-details__line">
            <FiMapPin className="footer__icon" size={20} />
            <span className="footer__paragraph">
              <p>Przędzalniana 6L</p>
              <p>Białystok, 15-688</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyContact;
