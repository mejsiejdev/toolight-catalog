import prisma from "@/dp";
import Image from "next/image";
import Link from "next/link";
// Import baner
import Baner from "@/public/assets/baner.jpg";
import Wrapper from "./components/layout/Wrapper";

export const metadata = {
  title: "tooLight",
  description: "Sprawdź najlepsze oświetlenie wewnętrzne w sklepie tooLight.",
};

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
        <Image
          priority
          src={Baner}
          alt="Baner"
          sizes="100vw"
          className="h-[48rem] w-full object-cover"
        />
        <div className="absolute w-full h-full grid grid-cols-1 md:grid-cols-2">
          <div className="bg-toolight-secondary/80 flex flex-col items-center justify-center p-24"></div>
        </div>
        <Wrapper className={"absolute grid grid-cols-1 md:grid-cols-2"}>
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-8 text-white pl-8 xl:pl-0 pr-8 md:pr-24 py-24">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl">
              Dla domu,
              <br /> dla łazienki, <br />
              <span className="font-semibold text-6xl lg:text-7xl xl:text-[5.25rem] md:leading-tight">
                dla ciebie.
              </span>
            </h2>
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
        <h3 className="text-4xl">Polecane kategorie</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
          {featured.map((product, key) => (
            <Link
              href={`/${product.category}`}
              key={key}
              className="flex flex-col w-full items-start gap-6 group"
            >
              <Image
                src={product.images[1]}
                alt={product.category}
                width="400"
                height="400"
                className="w-full h-full aspect-square group-hover:brightness-110 transition object-contain -z-10 rounded-lg shadow"
              />
              <p className="text-black text-2xl font-medium group-hover:text-toolight-secondary/75 transition">
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
