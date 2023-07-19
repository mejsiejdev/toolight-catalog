import Link from "next/link";
import { FiUser } from "react-icons/fi";
import "./styles/logInButton.scss";

const LogInButton = () => {
  return (
    <Link href={"/signin"} className="navbar__user">
      <button className="login-button">
        <FiUser className="login-icon" size={28} />
      </button>
    </Link>
  );
};

export default LogInButton;
