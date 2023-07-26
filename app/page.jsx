import prisma from "@/dp";
import Image from "next/image";
import Link from "next/link";
// Import baner
import Baner from "@/public/assets/baner.jpg";
import Wrapper from "./components/layout/Wrapper";

const getFeatured = async () => {
  const featured = await prisma.products.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      category: "asc",
    },
  });
  return featured;
};

const HomePage = async () => {
  const featured = await getFeatured();
  return (
    <>
      <div className="flex w-full relative items-center justify-center">
        <Image src={Baner} alt="Baner" className="h-[48rem] object-cover" />
        <div className="absolute w-full h-full grid grid-cols-1 md:grid-cols-2">
          <div className="bg-toolight-secondary/80 flex flex-col items-center justify-center p-24"></div>
        </div>
        <Wrapper className={"absolute grid grid-cols-1 md:grid-cols-2"}>
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-8 text-white pl-8 xl:pl-0 pr-8 md:pr-24 py-24">
            <p className="text-5xl lg:text-6xl xl:text-7xl">
              Dla domu,
              <br /> dla łazienki, <br />
              <span className="font-semibold text-6xl lg:text-7xl xl:text-[5.25rem] md:leading-tight">
                dla ciebie.
              </span>
            </p>
            <p className="text-xl lg:text-2xl">
              Otwarci na nowe możliwości, jesteśmy gotowi na potrzeby i sugestie
              naszych Klientów. Sprawdź naszą szeroką gamę produktów.
            </p>
            <Link
              href="/catalog"
              className="py-4 px-6 bg-white text-toolight-secondary font-semibold text-lg rounded"
            >
              Zobacz katalog
            </Link>
          </div>
        </Wrapper>
      </div>
      <Wrapper className="py-16 flex flex-col gap-8">
        <h2 className="text-4xl">Kategorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-8">
          {featured.map((product, key) => (
            <Link
              href={`/${product.category}`}
              key={key}
              className="flex flex-col w-full items-center gap-4 group"
            >
              <Image
                src={product.images[0]}
                alt={product.category}
                width="1000"
                height="1000"
                className="aspect-square group-hover:brightness-105 transition object-contain -z-10 rounded-lg shadow border border-toolight-border-gray-light/25"
              />
              <p className="text-black text-xl group-hover:text-toolight-secondary/75 transition">
                {product.category}
              </p>
            </Link>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default HomePage;
