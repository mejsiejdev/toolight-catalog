import Input from "../components/Input";

const Product = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Ustawienia</h1>
        <h2 className="text-toolight-secondary">
          Tutaj możesz zmienić np. swoje dane profilowe.
        </h2>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl">Dane profilowe</h3>
        <form className="w-full grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <label>Imię</label>
            <Input type="text" name="name" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Nazwisko</label>
            <Input type="text" name="surname" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <Input type="email" name="email" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Product;
