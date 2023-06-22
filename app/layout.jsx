'use client';
import './globals.scss';
import Navbar from '@/app/components/layout/navbar/Navbar';
import Footer from '@/app/components/layout/footer/Footer';
import useWindowScroll from '@/hooks/useWindowScroll';

const RootLayout = ({ children }) => {
  const scroll = useWindowScroll();

  const dynamicPadding = {
    paddingTop: scroll > 1 ? '60px' : '100px',
    transition: '0.3s',
  };

  return (
    <html lang="pl">
      <body style={dynamicPadding}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
