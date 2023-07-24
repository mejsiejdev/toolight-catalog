import Image from "next/image";
import prisma from "@/dp";
import Link from "next/link";
// Moment for date formatting
import moment from "moment/moment";
import "moment/locale/pl";

const getLastModifiedProducts = async () => {
  const products = await prisma.products.findMany({
    where: {
      title: {
        not: "",
      },
    },
    take: 6,
    orderBy: {
      updatedAt: "desc",
    },
  });
  return products;
};

const getMissingProducts = async () => {
  const products = await prisma.products.findMany({
    where: {
      title: {
        not: "",
      },
      quantity: {
        lt: 20,
      },
    },
    take: 12,
  });
  return products;
};

const Admin = async () => {
  const lastModifiedProducts = await getLastModifiedProducts();
  const missingProducts = await getMissingProducts();
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Panel główny</h1>
        <h2 className="text-toolight-border-gray-dark">
          Wszystkie najnowsze zmiany i informacje znajdziesz tutaj.
        </h2>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl text-toolight-secondary">
          Ostatnio modyfikowane produkty
        </h3>
        <div className="grid grid-cols-6 gap-4">
          {lastModifiedProducts.map((product, key) => (
            <Link
              href={`/admin/products/${product.id}`}
              key={key}
              className="shadow transition gap-2 flex flex-col bg-white rounded-lg border border-toolight-border-gray-light/50 hover:border-toolight-border-gray-light"
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                width="300"
                height="300"
                className="object-contain w-full aspect-square rounded-t-lg"
              />
              <div className="p-6 w-full flex flex-col h-full justify-between gap-2">
                <p className="">{product.title}</p>
                <p className="text-toolight-secondary/75 text-sm">
                  Zmodyfikowane {moment(product.updatedAt).fromNow()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl text-toolight-secondary">Brakujące produkty</h3>
        <div className="grid grid-cols-6 gap-4">
          {missingProducts.map((product, key) => (
            <Link
              href={`/admin/products/${product.id}`}
              key={key}
              className="shadow transition gap-2 flex flex-col bg-white rounded-lg border border-toolight-border-gray-light/50 hover:border-toolight-border-gray-light"
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                width="300"
                height="300"
                className="object-contain w-full aspect-square rounded-t-lg"
              />
              <div className="p-6 w-full flex flex-col h-full justify-between gap-2">
                <p>{product.title}</p>
                <p className="text-toolight-secondary/75 text-sm">
                  {`Pozostało ${product.quantity} sztuk produktu`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
