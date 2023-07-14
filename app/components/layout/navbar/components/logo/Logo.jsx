"use client";

import Link from "next/link";
import Image from "next/image";
import "./styles/logo.scss";

const Logo = () => {
  return (
    <>
      <div className="navbar__logo">
        <Link href="/">
          <Image
            className="logo"
            src="/assets/logo.png"
            width={200}
            height={20}
            alt={"kjkj"}
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default Logo;
