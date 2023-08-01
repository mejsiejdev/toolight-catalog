import Wrapper from "@/app/components/layout/Wrapper";
import Image from "next/image";
import Logo from "@/public/assets/toolight.svg";

const Footer = () => {
  return (
    <footer className="border-t border-toolight-border-gray-light/50 bottom-0">
      <Wrapper className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8">
        <div className="flex flex-col gap-2">
          <Image
            className="company-logo"
            width={175}
            height={75}
            src={Logo}
            alt="Logo Toolight"
          />
          <p className="font-extralight">
            Dla domu, dla łazienki,{" "}
            <strong className="font-semibold text-toolight-secondary">
              dla ciebie.
            </strong>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-toolight-secondary text-sm">
          <p className="text-toolight-secondary text-sm">
            Podlasiak Andrzej Cylwik sp. k., NIP 966-216-01-21
          </p>
          <p>© Toolight.pl - Wszystkie prawa zastrzeżone.</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
