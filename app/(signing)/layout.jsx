const Layout = ({ children }) => {
  return (
    <body className="flex flex-col justify-center items-center w-full h-full min-h-screen">
      {children}
    </body>
  );
};

export default Layout;
