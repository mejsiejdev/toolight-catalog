import Table from "./components/Table";
import IconLink from "./components/IconLink";
// Moment for date formatting
import moment from "moment/moment";
import "moment/locale/pl";
import { MdEdit } from "react-icons/md";

const getLastModifiedProducts = async () => {
  const products = await prisma.products.findMany({
    where: {
      title: {
        not: "",
      },
    },
    take: 7,
    orderBy: {
      updatedAt: "desc",
    },
  });
  return products;
};

const Admin = async () => {
  const products = await getLastModifiedProducts();
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Panel główny</h1>
        <h2 className="text-toolight-border-gray-dark">
          Wszystkie najnowsze zmiany i informacje znajdziesz tutaj.
        </h2>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl text-toolight-secondary">
            Ostatnio modyfikowane produkty
          </h3>
          <Table
            headings={["Nazwa", "Zmodyfikowane", ""]}
            rows={products.map((product, key) => [
              product.title,
              moment(product.updatedAt).locale("pl").fromNow(),
              <div key={key} className="flex flex-row gap-2 justify-end">
                <IconLink
                  href={`/admin/products/${product.id}`}
                  icon={<MdEdit />}
                />
              </div>,
            ])}
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
