import Image from "next/image";
// Import baner
import Baner from "@/public/assets/baner.jpg";

const HomePage = () => {
  return (
    <>
      <Image src={Baner} alt="Baner" />
    </>
  );
};

export default HomePage;
