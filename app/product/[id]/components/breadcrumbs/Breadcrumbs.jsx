import "./styles/breadcrumbs.scss";
import Link from "next/link";
import { MdHome, MdArrowForwardIos } from "react-icons/md";

const Breadcrumbs = ({ category, title }) => {
  return (
    <span className="breadcrumbs">
      <Link
        href={`/`}
        className="breadcrumb__link"
        title="Powrót do strony głównej"
      >
        <MdHome className="text-xl" />
      </Link>
      <div className="breadcrumb__category">
        <MdArrowForwardIos className="text-xs text-toolight-secondary/75" />
        <Link href={`/${category}`} className="breadcrumb__link">
          {category}
        </Link>
      </div>
    </span>
  );
};

export default Breadcrumbs;
