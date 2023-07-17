"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/toolight_sm.svg";
import IconLink from "./components/IconLink";
// Icons
import { MdHome, MdInventory, MdPeople, MdSettings } from "react-icons/md";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <body className="w-full h-full min-h-screen flex flex-row">
      {/* Sidebar */}
      <nav className="fixed w-16 flex flex-col items-center justify-between gap-4 px-2 py-4 min-h-screen h-full border-r border-toolight-disabled bg-white">
        {/* Sidebar top part */}
        <div className="flex flex-col gap-4 items-center">
          {/* Logo */}
          <Image src={Logo} alt="Toolight" className="w-12" />
          {/* Odnośniki do odpowiednich sekcji */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <IconLink
              href={"/admin"}
              title={"Panel główny"}
              icon={<MdHome />}
              pathname={pathname}
            />
            <IconLink
              href={"/admin/users"}
              title={"Użytkownicy"}
              icon={<MdPeople />}
              pathname={pathname}
            />
            <IconLink
              href={"/admin/products"}
              title={"Produkty"}
              icon={<MdInventory />}
              pathname={pathname}
            />
          </div>
        </div>
        {/* Sidebar bottom part */}
        <div className="flex flex-col items-center gap-2">
          <IconLink
            title={"Ustawienia"}
            href={"/admin/settings"}
            icon={<MdSettings />}
            pathname={pathname}
          />
        </div>
      </nav>
      {/* Main content */}
      <main className="ml-16 w-full flex flex-col gap-8 p-8">{children}</main>
    </body>
  );
};

export default Layout;
