"use client";

import "./styles/header.scss";
import { FiPrinter } from "react-icons/fi";
import { PrimaryButton } from "@/app/components/layout/buttons/Buttons";
import { useRouter } from "next/navigation";

const Header = ({ title, id, isNew }) => {
  const router = useRouter();
  return (
    <header className="product-header">
      <h1 className="product-title">
        {isNew && <p className="product-new">Nowość</p>}
        {title}
      </h1>
      <PrimaryButton
        actionOnClick={() => router.push(`/product/${id}/print`)}
        icon={<FiPrinter />}
      >
        Karta produktu
      </PrimaryButton>
    </header>
  );
};

export default Header;
