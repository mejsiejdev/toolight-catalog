import Link from "next/link";

const IconLink = ({ href, title, icon, pathname }) => {
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
      className="p-1 flex flex-col items-center justify-center rounded text-3xl text-toolight-secondary cursor-pointer hover:bg-white-hover"
    >
      {icon}
    </button>
  );
};

export default IconLink;
