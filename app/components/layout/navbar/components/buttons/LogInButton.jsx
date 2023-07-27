import Link from "next/link";
import { FiUser } from "react-icons/fi";
import "./styles/logInButton.scss";

const LogInButton = () => {
  return (
    <Link href={"/signin"} title="Zaloguj się" className="login-button">
      <FiUser className="login-icon" size={28} />
    </Link>
  );
};

export default LogInButton;
