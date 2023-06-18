import './components/layout/styles/index.scss';
import './globals.scss';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
