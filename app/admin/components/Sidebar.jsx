"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/toolight.svg";
import { MdHome, MdPeople, MdInventory, MdLogout } from "react-icons/md";
import Link from "next/link";

import { deleteCookie } from "../actions";
import { useTransition } from "react";
import useSWR from "swr";
import fetcher from "@/app/lib/fetcher";

const Sidebar = ({ id }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [pending, setTransition] = useTransition();
  const { data, isLoading } = useSWR(`/api/user/${id}`, fetcher);
  return (
    <nav className="fixed w-64 flex flex-col items-start justify-between gap-4 px-4 pb-4 pt-8 min-h-screen h-full border-r border-toolight-disabled">
      {/* Sidebar top part */}
      <div className="flex flex-col gap-4 w-full">
        {/* Logo */}
        <Image
          src={Logo}
          alt="Toolight"
          className="w-full px-4 pb-4"
          priority
        />
        {/* Odnośniki do odpowiednich sekcji */}
        <div className="flex flex-col gap-2 w-full">
          <SidebarLink
            href={"/admin"}
            title={"Panel główny"}
            icon={<MdHome />}
            pathname={pathname}
          />
          <SidebarLink
            href={"/admin/users"}
            title={"Użytkownicy"}
            icon={<MdPeople />}
            pathname={pathname}
          />
          <SidebarLink
            href={"/admin/products"}
            title={"Produkty"}
            icon={<MdInventory />}
            pathname={pathname}
          />
        </div>
      </div>
      <div className="flex flex-row items-center w-full gap-4 justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-toolight-secondary/75">Zalogowany jako:</p>
          <p className="font-semibold truncate w-44">
            {isLoading ? "Ładowanie..." : `${data.name} ${data.surName}`}
          </p>
        </div>
        <button type="button" disabled={pending}>
          <MdLogout
            onClick={() =>
              setTransition(() => {
                deleteCookie("token");
                router.push("/signin");
              })
            }
            className={`text-[1.75rem] text-toolight-secondary hover:text-toolight-secondary/75 transition disabled:text-toolight-disabled disabled:cursor-wait`}
          />
        </button>
      </div>
    </nav>
  );
};

const SidebarLink = ({ title, href, icon, pathname }) => (
  <Link
    href={href}
    title={title}
    className={`flex flex-row gap-3 py-2 px-3  w-full items-center rounded ${
      pathname === href
        ? "bg-toolight-primary/40 text-toolight-primary-hover-darker"
        : "hover:bg-toolight-border-gray-light/25 text-toolight-secondary"
    }`}
  >
    <span className="text-[1.75rem]">{icon}</span>
    <p className="font-semibold">{title}</p>
  </Link>
);

export default Sidebar;
