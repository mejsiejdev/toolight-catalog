import "./styles/footer.scss";
import Image from "next/image";
import Wrapper from "@/app/components/layout/Wrapper";

const Footer = () => {
	return (
		<footer className="footer">
			<Wrapper>
				<section className="footer">
					<div className="footer-column">
						<Image className="company-logo" src="/../public/assets/logo.png" width={300} height={100} alt={"dupa"} />
						<p className="company-description">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam dolore doloremque eligendi esse eum ex neque saepe sit tempore! Amet
							corporis culpa ducimus eum exercitationem fuga praesentium provident quo.
						</p>
					</div>
					<div className="footer-column">
						<h5 className="footer-heading">Dane firmy</h5>
						<div className="company-details">
							<p>Podlasiak Andrzej Cylwik sp. k.</p>
							<p>ul.Przędzalniana 60</p>
							<p>15-688 Białystok</p>
							<p>NIP 966-216-01-21</p>
						</div>
					</div>
					<div className="footer-column">
						<h5 className="footer-heading">Kontakt</h5>
						<div className="contact-details">
							<p>+48 857 337 777</p>
							<p>biuro@toolight.pl</p>
						</div>
					</div>
				</section>
				<small>© Toolight.pl - Wszystkie prawa zastrzezone.</small>
			</Wrapper>
		</footer>
	);
};

export default Footer;
