import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verify } from "jsonwebtoken";
import Sidebar from "./components/Sidebar";
import { deleteCookie } from "./actions";

const Layout = async ({ children }) => {
  const cookieStore = cookies();
  // Get token from cookies
  const token = cookieStore.get("token");
  // Redirect to signin if token isn't present
  if (!token) {
    console.log("Lack of authentication token.");
    redirect("/signin");
  }
  let userId = "";
  // Verify the token's value
  verify(token.value, process.env.JWT_SECRET, async function (error, decoded) {
    if (error) {
      console.log("Invalid token.");
      // Delete the invalid token to prevent infinite redirects
      await deleteCookie("token");
      redirect("/signin");
    }
    userId = decoded.id;
  });
  return (
    <body className="w-full h-full min-h-screen flex flex-row">
      <Sidebar id={userId} />
      <main className="ml-64 w-full flex flex-row justify-center p-8 bg-toolight-border-gray-light/5">
        <div className="w-full flex flex-col items-start gap-8">{children}</div>
      </main>
    </body>
  );
};

export default Layout;
