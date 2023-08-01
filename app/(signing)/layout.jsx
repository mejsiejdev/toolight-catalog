import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = ({ children }) => {
  // If the token is already there, redirect to `/admin`.
  const cookieStore = cookies();
  if (cookieStore.get("token")) {
    redirect("/admin");
  }
  return (
    <body className="flex flex-col justify-center items-center w-full h-full min-h-screen">
      {children}
    </body>
  );
};

export default Layout;
