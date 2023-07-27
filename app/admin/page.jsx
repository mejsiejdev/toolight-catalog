import prisma from "@/dp";
// Moment for date formatting
import moment from "moment";
import "moment/locale/pl";
import Card from "./components/Card";

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
    select: {
      id: true,
      title: true,
      images: true,
      updatedAt: true,
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
    select: {
      id: true,
      title: true,
      images: true,
      quantity: true,
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
            <Card
              href={`/admin/products/${product.id}`}
              key={key}
              image={product.images[0]}
              title={product.title}
              text={`Zmodyfikowane ${moment(product.updatedAt).fromNow()}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl text-toolight-secondary">Brakujące produkty</h3>
        <div className="grid grid-cols-6 gap-4">
          {missingProducts.map((product, key) => (
            <Card
              href={`/admin/products/${product.id}`}
              key={key}
              image={product.images[0]}
              title={product.title}
              text={`Pozostało ${product.quantity} sztuk produktu`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
