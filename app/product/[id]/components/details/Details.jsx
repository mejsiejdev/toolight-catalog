import MainInfo from "@/app/product/[id]/components/details/components/details/mainInfo/MainInfo";

const Details = ({ productDetails }) => {
  return (
    <div>
      <MainInfo info={productDetails} />
    </div>
  );
};

export default Details;
