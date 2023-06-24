import './styles/breadcrumbs.scss';
import Link from 'next/link';
import { FiHome, FiChevronRight } from 'react-icons/fi';

const Breadcrumbs = ({ category, title }) => {
  return (
    <span className="breadcrumbs">
      <Link href={`/`} className="breadcrumb__link">
        <FiHome />
      </Link>
      <span className="breadcrumb__category">
        <FiChevronRight />
        <Link href={`/catalog/${category}`} className="breadcrumb__link">
          {category}
        </Link>
      </span>
      <span className="breadcrumb__category">
        <FiChevronRight />
        <span>{title}</span>
      </span>
    </span>
  );
};

export default Breadcrumbs;
