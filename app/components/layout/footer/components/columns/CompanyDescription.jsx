import "./styles/company.scss";
import Image from "next/image";

const CompanyDescription = () => {
  return (
    <div className="footer__description footer-column">
      <Image
        className="company-logo"
        src="/../public/assets/logo.png"
        width={250}
        height={100}
        alt="Logo Toolight"
      />
      <p className="company-description footer__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aperiam dolore doloremque eligendi esse eum ex neque saepe sit tempore!
        Amet corporis culpa ducimus eum exercitationem fuga praesentium
        provident quo.
      </p>
    </div>
  );
};

export default CompanyDescription;
