'use client';
import './styles/mainInfo.scss';
import currencyFormatter from 'currency-formatter';

const MainInfo = ({ info }) => {
  return (
    <div className="details__main-info">
      <div className="main-info__identifiers">
        <p className="identifier__tag">
          <strong>ID: </strong>
          {info.storeId}
        </p>
        <p className="identifier__tag">
          <strong>Variant ID: </strong>
          {info.variantId}
        </p>
        <p className="identifier__tag">
          <strong>EAN: </strong>
          {info.ean}
        </p>
        <p className="identifier__tag">
          <strong>SKU: </strong>
          {info.sku}
        </p>
      </div>
      <div className="main-info__prices">
        <span className="prices__title">CENA</span>
        <div className="prices__tags">
          <span className="tag">
            <strong>Netto</strong>
            {currencyFormatter.format(info.priceNet, { code: 'PLN' })}
          </span>
          <span className="tag">
            <strong>Brutto</strong>
            {currencyFormatter.format(info.priceGros, { code: 'PLN' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
