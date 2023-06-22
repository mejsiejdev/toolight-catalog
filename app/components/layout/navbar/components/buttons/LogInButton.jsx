'use client';
import { FiUser } from 'react-icons/fi';
import './styles/logInButton.scss';

const LogInButton = () => {
  return (
    <div className="navbar__user">
      <button className="login-button">
        <FiUser className="login-icon" size={28} />
      </button>
    </div>
  );
};

export default LogInButton;
