import MainInfo from '@/app/[[...catalog]]/product/[id]/components/details/components/details/mainInfo/MainInfo';

const Details = ({ productDetails }) => {
  return (
    <div>
      <MainInfo info={productDetails} />
    </div>
  );
};

export default Details;
