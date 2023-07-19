import Link from "next/link";
import { MdRefresh } from "react-icons/md";

/**
 * IconLink
 * @param {string} [href]
 * @param {string} title
 * @param {IconType} icon
 * @param {string} [pathname]
 * @param {boolean} [loading]
 * @returns {JSX.Element}
 */
const IconLink = ({ href, title, icon, pathname, loading, onClick }) => {
  return typeof href !== "undefined" ? (
    <Link
      title={title}
      href={href}
      className={`p-1 flex flex-col items-center justify-center rounded text-3xl text-toolight-secondary cursor-pointer ${
        pathname === href ? "bg-white-hover" : "hover:bg-white-hover"
      }`}
    >
      {icon}
    </Link>
  ) : (
    <button
      type="button"
      title={title}
      disabled={loading}
      onClick={onClick}
      className={`p-1 flex flex-col items-center justify-center rounded text-3xl text-toolight-secondary ${
        !loading
          ? "hover:bg-white-hover cursor-pointer"
          : "animate-pulse cursor-wait"
      }`}
    >
      {loading ? <MdRefresh className="animate-spin" /> : icon}
    </button>
  );
};

export default IconLink;
