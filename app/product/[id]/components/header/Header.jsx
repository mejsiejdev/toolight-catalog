import './styles/header.scss';
import { FiPrinter } from 'react-icons/fi';
import { PrimaryButton } from '@/app/components/layout/buttons/Buttons';

const Header = ({ title, isNew }) => {
  return (
    <header className="product-header">
      <h1 className="product-title">
        {isNew && <p className="product-new">Nowość</p>}
        {title}
      </h1>
      <PrimaryButton actionOnClick={() => alert('ta')} icon={<FiPrinter />}>
        Karta produktu
      </PrimaryButton>
    </header>
  );
};

export default Header;
